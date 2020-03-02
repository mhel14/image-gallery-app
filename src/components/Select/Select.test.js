import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { StoreProvider } from './../../context/StoreContext';
import Select from './Select';

it('renders select/dropdown element correctly', () => {
	const app = (
		<StoreProvider>
			<Select id={'select_id'} />
		</StoreProvider>
	);
	const { getByTestId } = render(app);
	const select = getByTestId('select_id');

	expect(select).toBeDefined();
});

it('disable select/dropdown element when needed', () => {
	const app = (
		<StoreProvider>
			<Select disabled={true} id="select_id" />
		</StoreProvider>
	);
	const { getByTestId } = render(app);
	const select = getByTestId('select_id');

	expect(select).toBeDisabled();
});

it('renders option child elements correctly', () => {
	const app = (
		<StoreProvider>
			<Select>
				<option data-testid="option_latest">Latest</option>
			</Select>
		</StoreProvider>
	);
	const { getByTestId } = render(app);
	const option = getByTestId('option_latest');

	expect(option).toBeDefined();
});

it('Udates value correctly', () => {
	const app = (
		<StoreProvider>
			<Select id="order_by">
				<option value="latest">Latest</option>
				<option value="oldest">Oldest</option>
			</Select>
		</StoreProvider>
	);
	const { getByTestId, getByText } = render(app);
	const select_by_order = getByTestId('order_by');
	const defaultValue = getByText('Latest');
	const updatedValue = getByText('Oldest');

	expect(defaultValue).toBeInTheDocument();
	fireEvent.change(select_by_order, { target: { value: 'oldest' } });
	expect(updatedValue).toBeInTheDocument();
});
