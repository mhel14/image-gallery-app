import React from 'react';
import { render } from '@testing-library/react';
import { StoreProvider } from './../../context/StoreContext';
import Pagination from './Pagination';

const app = (
	<StoreProvider>
		<Pagination />
	</StoreProvider>
);

it('renders pagination component correctlty', () => {
	const { getByTestId } = render(app);
	const paginationComponent = getByTestId('pagination-list');

	expect(paginationComponent).toBeDefined();
});

it('Initially renders pagination first, prev and next only', () => {
	const { getByText, queryByText } = render(app);
	const first = getByText('<< First');
	const previous = getByText('< Prev');
	const next = getByText('Next >');
	const last = queryByText('Last >>');

	expect(first).toBeDefined();
	expect(previous).toBeDefined();
	expect(next).toBeDefined();
	expect(last).toBeNull();
});

it('renders pagination last button when total number of page value is available or truthy', () => {
	const app = (
		<StoreProvider>
			<Pagination testTotalNumberOfPage={5} />
		</StoreProvider>
	);
	const { getByText, queryByText } = render(app);
	const last = getByText('Last >>');

	expect(last).toBeDefined();
});
