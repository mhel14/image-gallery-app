import { useContext } from 'react';
import { StoreContext } from './../context/StoreContext';

export const useHandleFetch = () => {
	const store = useContext(StoreContext);

	const [ isLastPageReached, setIsLastPageReached ] = store.isLastPageReached;
	const [ isLoading, setIsLoading ] = store.isLoading;
	const [ photos, setPhotos ] = store.photos;
	const [ totalNumberOfPage, setTotalNumberOfPage ] = store.totalNumberOfPage;
	const [ isFirstPageReached, setIsFirstPageReached ] = store.isFirstPageReached;
	const [ isSearchResultEmpty, setIsSearchResultEmpty ] = store.isSearchResultEmpty;
	const [ isRateLimitExceeded, setIsRateLimitExceeded ] = store.isRateLimitExceeded;

	const handleFetch = (apiUrl) => {
		fetch(apiUrl)
			.then((res) => {
				if (res.status === 403) {
					setIsRateLimitExceeded(true);
					throw new Error('API Rate Limit Exceeded.. kindly wait until it refreshed.');
				} else {
					setIsRateLimitExceeded(false);
				}

				return res.json();
			})
			.then((res) => {
				if (res.total_pages === 1) {
					setIsFirstPageReached(true);
					setIsLastPageReached(true);
				}

				if (res.total === 0) {
					setIsSearchResultEmpty(true);
				} else {
					setIsLoading(true);
					setIsSearchResultEmpty(false);
					setPhotos(res.results || res);
					setTotalNumberOfPage(res.total_pages || 0);
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	return { store, handleFetch };
};
