import React, { useContext } from 'react';
import { StoreContext } from './../../context/StoreContext';
import './Photos.css';

const Photos = ({ mockPhotos }) => {
	const store = useContext(StoreContext);
	const [ photos ] = store.photos;
	const arrOfPhotos = mockPhotos || photos;
	
	return arrOfPhotos.length
		? arrOfPhotos.map((photo) => (
				<li data-testid="gallery-list" className="gallery__list" key={photo.id}>
					<img className="gallery__photo" src={photo.urls.small} alt={photo.alt_description} />
				</li>
			))
		: null;
};

export default Photos;
