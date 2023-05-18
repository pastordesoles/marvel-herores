import { type ApisauceInstance, create } from 'apisauce';
import * as React from 'react';
import { useCallback, useContext, useEffect, useState } from 'react';
import { type MarvelData, type MarvelResponse } from './types';
import {
  type ContextStateFetched,
  type ApiRequestContextState,
  type ContextStateInitialized,
  ApiRequestContext,
  type IActions,
} from './RequestContext';
import {
  marvelApikey,
  marvelBaseUrl,
  marvelHash,
  marvelTs,
} from './authParams';

type Props = {
  url: string;
  maxResultsPerPage: number;
  children: JSX.Element;
};

type ProxyHandler<T, P extends string> = {
  get?(
    target: { results: { [key in string]?: T }; apiInstance: ApisauceInstance },
    p: P,
    receiver: any,
  ): any;
  set?(
    target: { results: { [key in P]?: T } },
    p: P,
    value: any,
    receiver: any,
  ): boolean;
};

declare const Proxy: new <T extends object>(
  target: { results: { [key in string]?: T }; apiInstance: ApisauceInstance },
  handler: ProxyHandler<T, string>,
) => { [key: string]: Promise<T> };

const marvelProxy = new Proxy<MarvelResponse>(
  {
    apiInstance: create({ baseURL: marvelBaseUrl }),
    results: {},
  },
  {
    get<T extends MarvelResponse>(
      target: {
        results: {
          [key in string]?: T;
        };
      },
      url: string,
    ) {
      const values = target;

      // eslint-disable-next-line no-async-promise-executor
      return new Promise<T>(async (resolve, reject) => {
        // eslint-disable-next-line no-prototype-builtins
        if (values.results.hasOwnProperty(url)) {
          resolve(values.results[url]!);
          return;
        }

        try {
          const response = await (
            target as {
              results: {
                [key in string]?: T;
              };
              apiInstance: ApisauceInstance;
            }
          ).apiInstance.get<T>(url);
          const { data } = response;
          if (response.status !== 200 || !data) {
            throw new Error('Error fetching data');
          }

          (
            target as {
              results: {
                [key in string]?: T;
              };
            }
          ).results[url] = data;

          // eslint-disable-next-line no-promise-executor-return
          return data;
        } catch (e) {
          reject(e);
        }
      });
    },
    set(target, url: string, value) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      target.results[url] = value;
      return true;
    },
  },
);

function getAuthQueryStringParams(): {
  apikey: string;
  ts: string;
  hash: string;
} {
  return {
    apikey: marvelApikey,
    ts: marvelTs,
    hash: marvelHash,
  };
}

function getPaginationQueryStringParams(
  maxResults: number,
  page: number,
): {
  limit: string;
  offset: string;
} {
  return { limit: `${maxResults}`, offset: `${page * maxResults}` };
}

export function CachedRequestsProvider({
  children,
  url,
  maxResultsPerPage,
}: Props) {
  const [state, setState] = useState<ApiRequestContextState<MarvelData>>({
    isFetching: false,
    url,
  } as ContextStateInitialized);

  const [page, setPage] = useState(0);

  const getNavigatableUrl = useCallback((): string => {
    const newUrl = new URL(url);
    Object.entries({
      ...getAuthQueryStringParams(),
      ...getPaginationQueryStringParams(maxResultsPerPage, page),
    }).forEach((param) => {
      newUrl.searchParams.append(param[0], param[1]);
    });
    return newUrl.toString();
  }, [page, state]);

  useEffect(() => {
    if (state.isFetching || !state.url) {
      return;
    }

    setState(
      // eslint-disable-next-line no-negated-condition
      state.url !== url
        ? {
            isFetching: true,
            url,
          }
        : {
            ...state,
            isFetching: true,
          },
    );

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    marvelProxy[getNavigatableUrl()].then((value) => {
      setState({
        ...state,
        isFetching: false,
        data: {
          ...(state.data ?? {}),
          [url]: value,
        },
      } as ContextStateFetched<MarvelData>);
    });
  }, [page, url]);

  return (
    <ApiRequestContext.Provider
      value={[
        state,
        {
          // eslint-disable-next-line no-warning-comments
          /* TODO implementar la acción */
        },
      ]}
    >
      {children}
    </ApiRequestContext.Provider>
  );
}

export const useCachedRequests = (): [
  ApiRequestContextState<MarvelData>,
  IActions,
] => useContext(ApiRequestContext);
