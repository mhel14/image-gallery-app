import React from 'react';
import { render } from '@testing-library/react';
import { StoreProvider } from './../../../context/StoreContext';
import Orientation from './Orientation';

const app = (
	<StoreProvider>
		<Orientation />
	</StoreProvider>
);

it('renders filter by orientation wrapper correctly ', () => {
	const { getByTestId } = render(app);
	const orientationFilter = getByTestId('orientation');

	expect(orientationFilter).toBeDefined();
});

it('renders filter by orientation label correctly ', () => {
	const { getByLabelText } = render(app);
	const orientationLabel = getByLabelText('Orientation:');

	expect(orientationLabel).toBeDefined();
});

it('renders filter by orientation dropdown correctly', () => {
	const { getByTestId } = render(app);
	const filterOrientation = getByTestId('filter_orientation');

	expect(filterOrientation).toBeDefined();
});
