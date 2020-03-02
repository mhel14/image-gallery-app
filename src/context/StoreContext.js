import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

export const StoreProvider = (props) => {
	const [ searchString, setSearchString ] = useState('');
	const [ photos, setPhotos ] = useState('');
	const [ isLoading, setIsLoading ] = useState(false);
	const [ itemPerPage, setItemPerPage ] = useState(15);
	const [ currentPage, setCurrentPage ] = useState(1);
	const [ isSearchActive, setIsSearchActive ] = useState(false);
	const [ isButtonLastVisible, setIsButtonLastVisible ] = useState(false);
	const [ isFirstPageReached, setIsFirstPageReached ] = useState(true);
	const [ isLastPageReached, setIsLastPageReached ] = useState(false);
	const [ totalNumberOfPage, setTotalNumberOfPage ] = useState(0);
	const [ orderBy, setOrderBy ] = useState('latest');
	const [ orientation, setOrientation ] = useState('');
	const [ isRateLimitExceeded, setIsRateLimitExceeded ] = useState(false);
	const [ isSearchResultEmpty, setIsSearchResultEmpty ] = useState(false);

	const store = {
		searchString: [ searchString, setSearchString ],
		photos: [ photos, setPhotos ],
		isLoading: [ isLoading, setIsLoading ],
		itemPerPage: [ itemPerPage, setItemPerPage ],
		currentPage: [ currentPage, setCurrentPage ],
		isSearchActive: [ isSearchActive, setIsSearchActive ],
		isButtonLastVisible: [ isButtonLastVisible, setIsButtonLastVisible ],
		isFirstPageReached: [ isFirstPageReached, setIsFirstPageReached ],
		isLastPageReached: [ isLastPageReached, setIsLastPageReached ],
		totalNumberOfPage: [ totalNumberOfPage, setTotalNumberOfPage ],
		orderBy: [ orderBy, setOrderBy ],
		orientation: [ orientation, setOrientation ],
		isRateLimitExceeded: [ isRateLimitExceeded, setIsRateLimitExceeded ],
		isSearchResultEmpty: [ isSearchResultEmpty, setIsSearchResultEmpty ]
	};
	return <StoreContext.Provider value={store}>{props.children}</StoreContext.Provider>;
};
