import React from 'react';
import Select from './../../Select/Select';
import { fetchApiUrl } from './../../../helpers/FetchApiUrl';
import { useHandleFetch } from './../../../helpers/useHandleFetch';

const FilterOrientation = () => {
	const { store, handleFetch } = useHandleFetch();
	const [ searchString ] = store.searchString;
	const [ itemPerPage ] = store.itemPerPage;
	const [ orientation, setOrientation ] = store.orientation;
	const [ currentPage, setCurrentPage ] = store.currentPage;
	const [ isRateLimitExceeded, setIsRateLimitExceeded ] = store.isRateLimitExceeded;
	const [ isLoading, setIsLoading ] = store.isLoading;
	const [ isFirstPageReached, setIsFirstPageReached ] = store.isFirstPageReached;
	const [ isLastPageReached, setIsLastPageReached ] = store.isLastPageReached;

	const handleOrientationFilter = (e) => {
		const filterValue = e.target.value;
		setIsLoading(true);

		handleFetch(
			fetchApiUrl('search/photos', {
				page: 1,
				per_page: itemPerPage,
				query: searchString,
				orientation: filterValue
			})
		);
		setCurrentPage(1);
		setIsFirstPageReached(true);
		setIsLastPageReached(false);
		setOrientation(filterValue);
	};

	return (
		<div data-testid="orientation" className="order_by">
			<label htmlFor="filter_orientation">Orientation: </label>
			<Select
				id="filter_orientation"
				onChange={handleOrientationFilter}
				value={orientation}
				disabled={isRateLimitExceeded}
			>
				<option value="landscape">Landscape</option>
				<option value="portrait">Portrait</option>
				<option value="squarish">Squarish</option>
			</Select>
		</div>
	);
};

export default FilterOrientation;
