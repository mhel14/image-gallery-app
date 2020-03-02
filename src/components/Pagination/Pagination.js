import React from 'react';
import Button from './../Button/Button';
import { fetchApiUrl } from './../../helpers/FetchApiUrl';
import { useHandleFetch } from './../../helpers/useHandleFetch';
import './Pagination.css';

const Pagination = ({ testTotalNumberOfPage }) => {
	const { store, handleFetch } = useHandleFetch();
	const [ isSearchActive ] = store.isSearchActive;
	const [ searchString ] = store.searchString;
	const [ orderBy ] = store.orderBy;
	const [ totalNumberOfPage, setTotalNumberOfPage ] = store.totalNumberOfPage;
	const [ itemPerPage ] = store.itemPerPage;
	const [ orientation ] = store.orientation;
	const [ currentPage, setCurrentPage ] = store.currentPage;
	const [ isButtonLastVisible, setIsButtonLastVisible ] = store.isButtonLastVisible;
	const [ isFirstPageReached, setIsFirstPageReached ] = store.isFirstPageReached;
	const [ isLastPageReached, setIsLastPageReached ] = store.isLastPageReached;
	const [ isSearchResultEmpty, setIsSearchResultEmpty ] = store.isSearchResultEmpty;
	const [ isRateLimitExceeded, setIsRateLimitExceeded ] = store.isRateLimitExceeded;

	const handlePageClick = (page) => {
		if (isSearchActive) {
			handleFetch(
				fetchApiUrl('search/photos', {
					per_page: itemPerPage,
					orientation,
					query: searchString,
					page
				})
			);
			setCurrentPage(page);
			setIsButtonLastVisible(false);
			setIsLastPageReached(page === totalNumberOfPage);
			setIsFirstPageReached(page === 1);
		} else {
			handleFetch(fetchApiUrl('photos', { order_by: orderBy, per_page: itemPerPage, page }));
			setCurrentPage(page);
			setIsFirstPageReached(page === 1);
		}
	};

	return (
		<ul data-testid="pagination-list" className="pagination-list">
			<li>
				<Button
					onClick={() => handlePageClick(1)}
					disabled={isFirstPageReached || isSearchResultEmpty || isRateLimitExceeded}
					text="<< First"
				/>
			</li>
			<li>
				<Button
					onClick={() => handlePageClick(currentPage - 1 || 1)}
					disabled={isFirstPageReached || isSearchResultEmpty || isRateLimitExceeded}
					text="< Prev"
				/>
			</li>
			<li>
				<Button
					onClick={() => handlePageClick(currentPage + 1)}
					disabled={(isSearchActive && isLastPageReached) || isSearchResultEmpty || isRateLimitExceeded}
					text="Next >"
				/>
			</li>
			{totalNumberOfPage || testTotalNumberOfPage ? (
				<li>
					<Button
						onClick={() => handlePageClick(totalNumberOfPage)}
						disabled={isLastPageReached || isSearchResultEmpty || isRateLimitExceeded}
						text="Last >>"
					/>
				</li>
			) : null}
		</ul>
	);
};

export default Pagination;
