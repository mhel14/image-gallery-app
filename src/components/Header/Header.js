import React, { useContext } from 'react';
import { StoreContext } from './../../context/StoreContext';
import Search from '../Search/Search';
import Pagination from '../Pagination/Pagination';
import FilterPerPage from '../Filter/Perpage/Perpage';
import FilterOrder from '../Filter/Order/Order';
import FilterOrientation from '../Filter/Orientation/Orientation';
import './Header.css';

const Header = ({ paginationTestId, mockIsSearchActive }) => {
	const store = useContext(StoreContext);
	const [ isSearchActive ] = store.isSearchActive;
	return (
		<div data-testid="header-wrapper" className="header">
			<Search />
			<div data-testid="filters" className="page-filter-wrapper">
				<div data-testid="pagination" className="pagination">
					<Pagination testId={paginationTestId} />
				</div>
				<div className="filter">
					<FilterPerPage isPerPageDisabled={isSearchActive} />
					{!isSearchActive && <FilterOrder />}
					{(isSearchActive || mockIsSearchActive) && <FilterOrientation />}
				</div>
			</div>
		</div>
	);
};

export default Header;
