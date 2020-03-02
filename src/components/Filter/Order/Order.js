import React from 'react';
import { fetchApiUrl } from './../../../helpers/FetchApiUrl';
import { useHandleFetch } from './../../../helpers/useHandleFetch';
import Select from '../../Select/Select';

const FilterOrder = () => {
	const { store, handleFetch } = useHandleFetch();
	const [ isSearchActive, setIsSearchActive ] = store.isSearchActive;
	const [ orderBy, setOrderBy ] = store.orderBy;
	const [ itemPerPage ] = store.itemPerPage;
	const [ currentPage, setCurrentPage ] = store.currentPage;
	const [ isFirstPageReached, setIsFirstPageReached ] = store.isFirstPageReached;
	const [ isSearchResultEmpty, setIsSearchResultEmpty ] = store.isSearchResultEmpty;
	const [ isRateLimitExceeded, setIsRateLimitExceeded ] = store.isRateLimitExceeded;
	const [ isLoading, setIsLoading ] = store.isLoading;

	const handleOrderByFilter = (e) => {
		const filterValue = e.target.value;
		setIsLoading(true);

		handleFetch(fetchApiUrl('photos', { page: 1, per_page: itemPerPage, order_by: filterValue }));

		setCurrentPage(1);
		setIsFirstPageReached(true);
		setIsSearchActive(false);
		setOrderBy(filterValue);
	};

	return (
		<div data-testid="order_by" className="order_by">
			<label htmlFor="filter_order_by">Order: </label>
			<Select
				id="filter_order_by"
				onChange={handleOrderByFilter}
				value={orderBy}
				disabled={isSearchResultEmpty || isRateLimitExceeded}
			>
				<option value="latest">Latest</option>
				<option value="oldest">Oldest</option>
				<option value="popular">Popular</option>
			</Select>
		</div>
	);
};

export default FilterOrder;
