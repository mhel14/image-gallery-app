import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { StoreProvider } from './../../context/StoreContext';
import Header from './Header';

const app = (
	<StoreProvider>
		<Header />
	</StoreProvider>
);

it('renders header wrapper component correctly ', () => {
	const { getByTestId } = render(app);
	const headerWrapper = getByTestId('header-wrapper');

	expect(headerWrapper).toBeDefined();
});

it('renders search component correctly ', () => {
	const { getByTestId } = render(app);
	const searchComponent = getByTestId('search');

	expect(searchComponent).toBeDefined();
});

it('renders filters component correctly ', () => {
	const { getByTestId } = render(app);
	const filtersComponent = getByTestId('filters');

	expect(filtersComponent).toBeDefined();
});

it('renders pagination component correctly ', () => {
	const { getByTestId } = render(app);
	const paginationWrapper = getByTestId('pagination');
	const paginationList = getByTestId('pagination-list');

	expect(paginationWrapper).toBeDefined();
	expect(paginationList).toBeDefined();
});

it('renders filter perpage component correctly ', () => {
	const { getByTestId } = render(app);
	const filterPerpage = getByTestId('filter_perpage_wapper');

	expect(filterPerpage).toBeDefined();
});

it('renders filter orderby component correctly ', () => {
	const { getByTestId } = render(app);
	const filterOrderby = getByTestId('order_by');

	expect(filterOrderby).toBeDefined();
});

it('filter by orientation component should be initialy undefined ', () => {
	const { queryByTestId } = render(app);
	const filterOrientation = queryByTestId('orientation');

	expect(filterOrientation).toBeNull();
});

it('renders filter by orientation component only when search is active ', () => {
	const app = (
		<StoreProvider>
			<Header mockIsSearchActive={true} />
		</StoreProvider>
	);
	const { getByTestId } = render(app);
	const filterOrientation = getByTestId('orientation');

	expect(filterOrientation).toBeDefined();
});
