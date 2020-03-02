import React from 'react';
import { render } from '@testing-library/react';
import { StoreProvider } from './../../../context/StoreContext';
import Perpage from './Perpage';

const app = (
	<StoreProvider>
		<Perpage />
	</StoreProvider>
);

it('renders filter perpage wrapper correctly', () => {
	const { getByTestId } = render(app);
	const perpageFilterWrapper = getByTestId('filter_perpage_wapper');

	expect(perpageFilterWrapper).toBeDefined();
});

it('renders filter perpage label correctly', () => {
	const { getByLabelText } = render(app);
	const perpageLabel = getByLabelText('# of photo:');

	expect(perpageLabel).toBeDefined();
});

it('renders filter perpage dropdown select correctly', () => {
	const { getByTestId } = render(app);
	const perpageDropdown = getByTestId('filter_per_page');

	expect(perpageDropdown).toBeDefined();
});
