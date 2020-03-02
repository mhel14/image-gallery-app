import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from './Search';
import { StoreProvider } from './../../context/StoreContext';
import '@testing-library/jest-dom/extend-expect';

const app = (
	<StoreProvider>
		<Search />
	</StoreProvider>
);

describe('Search component', () => {
	it('render search input correctly', () => {
		const { getByTestId } = render(app);
		expect(getByTestId('search-input')).toBeDefined();
	});

	it('render search button correctly', () => {
		const { getByText } = render(app);
		expect(getByText('Search')).toBeDefined();
	});

	it('renders input correct value', () => {
		const { getByTestId } = render(app);
		const testValue = 'test value';

		fireEvent.change(getByTestId('search-input'), { target: { value: testValue } });
		expect(getByTestId('search-input')).toHaveValue(testValue);
	});

	it('submits button correctly', () => {
		const onSubmit = jest.fn();
		const { getByTestId } = render(
			<StoreProvider>
				<Search onSubmit={onSubmit} />
			</StoreProvider>
		);

		fireEvent.submit(getByTestId('search-form-submit'));
		expect(onSubmit).toHaveBeenCalled();
	});
});
