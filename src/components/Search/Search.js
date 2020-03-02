import React from 'react';
import Button from '../Button/Button';
import { fetchApiUrl } from './../../helpers/FetchApiUrl';
import { useHandleFetch } from './../../helpers/useHandleFetch';
import './Search.css';

const Search = ({ onSubmit }) => {
	const { store, handleFetch } = useHandleFetch();
	const [ isSearchActive, setIsSearchActive ] = store.isSearchActive;
	const [ searchString, setSearchString ] = store.searchString;
	const [ itemPerPage ] = store.itemPerPage;
	const [ currentPage, setCurrentPage ] = store.currentPage;
	const [ isButtonLastVisible, setIsButtonLastVisible ] = store.isButtonLastVisible;
	const [ isLastPageReached, setIsLastPageReached ] = store.isLastPageReached;
	const [ isLoading, setIsLoading ] = store.isLoading;

	const handleSearchInputUpdate = (e) => {
		setSearchString(e.target.value);
	};

	function handleSearchSubmit(e) {
		e.preventDefault();

		if (!searchString) return;
		setIsLoading(true);
		setIsSearchActive(true);
		setIsButtonLastVisible(true);
		setCurrentPage(1);
		setIsLastPageReached(false);

		return handleFetch(
			fetchApiUrl('search/photos', { per_page: itemPerPage, query: searchString, page: currentPage })
		);
	}

	return (
		<div data-testid="search" className="search-wrapper">
			<form data-testid="search-form-submit" onSubmit={onSubmit || handleSearchSubmit}>
				<input
					data-testid="search-input"
					className="search-input"
					onChange={handleSearchInputUpdate}
					type="text"
					placeholder="Search"
				/>
				<Button className="search-btn" text="Search" />
			</form>
		</div>
	);
};

export default Search;
