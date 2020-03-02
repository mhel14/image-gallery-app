import React from 'react';
import { render } from '@testing-library/react';
import { StoreProvider } from './context/StoreContext';
import App from './App';

const app = (
  <StoreProvider>
    <App />
  </StoreProvider>
)

it('renders main app without crashing', () => {
  const { getByTestId } = render(app);

  expect(getByTestId('app')).toBeDefined();
});

it('renders header component without crashing', () => {
  const { getByTestId } = render(app);

  expect(getByTestId('header-wrapper')).toBeDefined();
});

it('renders body component without crashing', () => {
  const { getByTestId } = render(app);

  expect(getByTestId('body')).toBeDefined();
});
