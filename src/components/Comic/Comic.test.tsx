import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Comic from './Comic';
import { mockComicOne } from '../../utils/mockComics';

describe('Given a Comic component', () => {
  describe('When its rendered with a comic', () => {
    test('Then it should the comic name', () => {
      const comicName = mockComicOne.title;

      render(<Comic comic={mockComicOne} />);

      const comicTitle = screen.getByText(comicName);

      expect(comicTitle).toBeDefined();
    });

    test('Then it should show its cover', () => {
      const imageAccessibilityLabel = `${mockComicOne.title} comic cover image`;

      render(<Comic comic={mockComicOne} />);

      const image = screen.getByLabelText(imageAccessibilityLabel);

      expect(image).toBeDefined();
    });
  });
});
