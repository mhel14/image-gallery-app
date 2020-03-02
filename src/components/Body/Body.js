import React, { useContext } from 'react';
import Photos from '../Photos/Photos';
import { StoreContext } from './../../context/StoreContext';
import './Body.css';
import Loading from '../Loading/Loading';

const Body = ({ mockPhotos }) => {
	const store = useContext(StoreContext);
	const [ isRateLimitExceeded ] = store.isRateLimitExceeded;
	const [ isSearchResultEmpty ] = store.isSearchResultEmpty;
	const [ photos ] = store.photos;
	const [ isLoading ] = store.isLoading;

	const renderBodyContent = () => {
		if (isRateLimitExceeded) {
			return <p data-testid="rate-limit-content" className="catcher-msg"> API Rate Limit Exceeded... </p>;
		}

		if (isSearchResultEmpty) {
			return <p className="catcher-msg"> No results found. </p>;
		}

		if (!photos && !mockPhotos) {
			return <p data-testid="empty-body" className="catcher-msg"> Unable to fetch photos, please check your internet connection. </p>;
		}

		return <ul data-testid="gallery" className="gallery">{<Photos />}</ul>;
	};

	return <div data-testid="body" className="body">
		<Loading />
		{ !isLoading && renderBodyContent() }
	</div>;
};

export default Body;
