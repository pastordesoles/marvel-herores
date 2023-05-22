import { useNavigation } from '@react-navigation/native';
import { type NavigationProps } from '../../navigation/types/navigation.types';
import { useAppDispatch } from '../../store/hooks';
import { type HeroStructure } from '../../store/features/heroSlice/types';
import Routes from '../../navigation/StackNavigator/routes';
import { comicsEndpoint, marvelBaseUrl } from '../../proxy/authParams';
import { loadCurrentHeroActionCreator } from '../../store/features/heroSlice/heroSlice';

const useLoadCurrentHero = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProps>();

  const loadCurrentHero = (selectedHero: HeroStructure) => {
    navigation.navigate(Routes.detail);

    const selectedHeroComicsUrl = `${marvelBaseUrl}/${selectedHero.id}/${comicsEndpoint}`;

    dispatch(
      loadCurrentHeroActionCreator({
        currentHeroDetail: selectedHero,
        url: selectedHeroComicsUrl,
      }),
    );
  };

  return { loadCurrentHero };
};

export default useLoadCurrentHero;
