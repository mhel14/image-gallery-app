import React, { useEffect, useContext } from 'react';
import { StoreContext } from './context/StoreContext';
import './App.css';
import Body from './components/Body/Body';
import Header from './components/Header/Header';
import { fetchApiUrl } from './helpers/FetchApiUrl';

const App = () => {
	const store = useContext(StoreContext);
	const [ photos, setPhotos ] = store.photos;
	const [ isSearchActive, setIsSearchActive ] = store.isSearchActive;
	const [ orderBy ] = store.orderBy;
	const [ itemPerPage ] = store.itemPerPage;
	const [ currentPage ] = store.currentPage;
	const [ setIsRateLimitExceeded ] = store.isRateLimitExceeded;
	const [ isLoading, setIsLoading ] = store.isLoading;

	useEffect(() => {
		setIsLoading(true);

		fetch(fetchApiUrl('photos', { order_by: orderBy, per_page: itemPerPage, page: currentPage }))
			.then((res) => {
				if (res.status === 403) {
					setIsRateLimitExceeded(true);
					throw new Error('API Rate Limit Exceeded.. Kindly wait until it refreshed.');
				}
				return res.json();
			})
			.then((res) => {
				setPhotos(res);
				setIsSearchActive(false);
				setIsLoading(false);
			});
	}, []);

	return (
		<div data-testid="app" className="app">
			<Header />
			<Body />
		</div>
	);
};

export default App;
