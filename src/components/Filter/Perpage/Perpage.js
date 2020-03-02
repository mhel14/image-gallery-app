import React from 'react';
import Select from './../../Select/Select';
import { fetchApiUrl } from './../../../helpers/FetchApiUrl';
import { useHandleFetch } from './../../../helpers/useHandleFetch';

const FilterPerPage = () => {
	const options = [];
	const { store, handleFetch } = useHandleFetch();
	const [ isSearchActive ] = store.isSearchActive;
	const [ searchString ] = store.searchString;
	const [ orderBy ] = store.orderBy;
	const [ itemPerPage, setItemPerPage ] = store.itemPerPage;
	const [ orientation ] = store.orientation;
	const [ currentPage ] = store.currentPage;
	const [ isSearchResultEmpty, setIsSearchResultEmpty ] = store.isSearchResultEmpty;
	const [ isRateLimitExceeded, setIsRateLimitExceeded ] = store.isRateLimitExceeded;
	const [ isLastPageReached, setIsLastPageReached ] = store.isLastPageReached;

	for (let counter = 1; counter <= 30; counter++) {
		options.push(
			<option key={counter} value={counter}>
				{counter}
			</option>
		);
	}

	const handlePerPageFilter = (e) => {
		const filterValue = e.target.value;
		if (isSearchActive) {
			handleFetch(
				fetchApiUrl('search/photos', {
					per_page: filterValue,
					orientation,
					query: searchString,
					page: currentPage
				})
			);
			setItemPerPage(filterValue);
		} else {
			handleFetch(fetchApiUrl('photos', { order_by: orderBy, per_page: filterValue, page: currentPage }));
			setItemPerPage(filterValue);
		}
	};

	return (
		<div data-testid="filter_perpage_wapper">
			<label htmlFor="filter_per_page"># of photo: </label>
			<Select
				id="filter_per_page"
				onChange={handlePerPageFilter}
				value={itemPerPage}
				disabled={isSearchResultEmpty || isRateLimitExceeded || isLastPageReached}
			>
				{options}
			</Select>
		</div>
	);
};

export default FilterPerPage;
