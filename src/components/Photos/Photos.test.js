import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { StoreProvider } from './../../context/StoreContext';
import Photos from './Photos';

const mockArrayOfPhotos = [
  { id: 1, urls: { small: "https://images.unsplash.com/photo-1583065822497-4e152dcaed22?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjM1MDUwfQ" } },
  { id: 2, urls: { small: "https://images.unsplash.com/photo-1583008440670-ddb4c98d6966?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjM1MDUwfQ" } }
];

afterEach(cleanup);

it('renders gallery list when photos are supplied and available', () => {
  const app = (
    <StoreProvider>
      <Photos mockPhotos={ mockArrayOfPhotos } />
    </StoreProvider>
  );
  const { queryAllByTestId } = render(app);
  const galleryList = queryAllByTestId('gallery-list');
  expect(galleryList).toBeDefined();
});

it('renders null when photos are not supplied or availalbe', () => {
  const app = (
    <StoreProvider>
      <Photos />
    </StoreProvider>
  );
  const { queryAllByTestId } = render(app);
  const galleryList = queryAllByTestId('gallery-list');
  expect(galleryList.length).toEqual(0);
})
