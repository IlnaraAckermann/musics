import React, { useEffect, useState } from "react";
import ThumbnailCard from "../Components/cards/thumbnailCard/ThumbnailCard";
import ApiService from "../services/ApiService";
import { useParams } from 'react-router-dom';

const AlbumPhotoList = () => {
	const { id } = useParams();
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		const fetchPhotos = async () => {
			try {
				const photosData = await ApiService.getPhotosByAlbumId(id);
				setPhotos(photosData);
			} catch (e) {
				console.error("Erro ao obter fotos do álbum:", e);
			}
		};
		fetchPhotos();
	}, []);

	return (
		<>
			<main>
			<h1>Lista de fotos do álbum {id} </h1>
			<div className="list-id">

			{photos.map((photo) => (
				<ThumbnailCard
					key={photo.id}
					thumbnailUrl={photo.thumbnailURL}
					url={photo.url}
				/>
			))}
			</div>

			</main>
		</>
	);
};

export default AlbumPhotoList;
