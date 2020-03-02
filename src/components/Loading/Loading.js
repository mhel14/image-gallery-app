import React, { useContext } from 'react';
import loadingGif from './../../../img/loading.gif';
import { StoreContext } from './../../context/StoreContext';
import './Loading.css';

const Loading = ({ mockIsLoading }) => {
	const store = useContext(StoreContext);
	const [ isLoading ] = store.isLoading;
	const [ photos ] = store.photos;

	if (isLoading || mockIsLoading || (photos && !photos.length)) {
		return (
			<div data-testid="loading" className="loading">
				<img className="loading-gif" src={loadingGif} alt="loading icon" />
			</div>
		);
	}

	return null;
};

export default Loading;
