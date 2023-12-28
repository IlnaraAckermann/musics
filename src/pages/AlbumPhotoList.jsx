import React, { useEffect, useState } from "react";
import ThumbnailCard from "../Components/cards/thumbnailCard/ThumbnailCard";
import ApiService from "../services/ApiService";

const AlbumPhotoList = () => {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		const fetchPhotos = async () => {
			try {
				const photosData = await ApiService.getPhotosByAlbumId(1);
				setPhotos(photosData);
				console.log("photosData", photosData);
			} catch (error) {
				console.error("Erro ao obter fotos do álbum:", error);
			}
		};
		fetchPhotos();
	}, []);

	return (
		<>
			<h1>Lista de fotos do álbum 1</h1>
			<main>
			
			{photos.map((photo) => (
				<ThumbnailCard
					key={photo.id}
					thumbnailUrl={photo.thumbnailURL}
					url={photo.url}
				/>
			))}

			</main>
		</>
	);
};

export default AlbumPhotoList;
