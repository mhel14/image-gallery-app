import React from 'react';
import { render } from '@testing-library/react';
import { StoreProvider } from './../../../context/StoreContext';
import Order from './Order';

const app = (
	<StoreProvider>
		<Order />
	</StoreProvider>
);

it('renders orderby filter component wrapper correctly ', () => {
	const { getByTestId } = render(app);
	const order_by = getByTestId('order_by');

	expect(order_by).toBeDefined();
});

it('renders orderby filter label correctly ', () => {
	const { getByLabelText } = render(app);
	const label = getByLabelText('Order:');

	expect(label).toBeDefined();
});

it('renders orderby filter correctly ', () => {
	const { getByTestId } = render(app);
	const select_drop_down = getByTestId('filter_order_by');

	expect(select_drop_down).toBeDefined();
});
