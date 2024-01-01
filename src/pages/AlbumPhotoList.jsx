import React, { useEffect, useState } from "react";
import ThumbnailCard from "../Components/cards/thumbnailCard/ThumbnailCard";
import ApiService from "../services/ApiService";
import { useParams} from "react-router-dom";

const AlbumPhotoList = ({ navigate }) => {
	const { id } = useParams();
	const [photos, setPhotos] = useState([]);

	const [searchId, setSearchId] = useState("");

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
	}, [id]);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (searchId.toString() !== '') {
			navigate(`/album/${searchId}`);
		}
	};

	return (
		<>
			<main>
				<header className="album-photos">
					<h1 className="title">Lista de fotos do álbum {id} </h1>

					<form onSubmit={handleSubmit}>
						<input
							type="number"
							value={searchId}
							onChange={(event) => setSearchId(event.target.value)}
							placeholder="Digite o ID do álbum"
						/>
						<button type="submit">
							<i className="fa-solid fa-magnifying-glass"></i>
						</button>
					</form>
				</header>
				{photos.length === 0 && <h2>Album inexistente</h2>}
				<div className="list-id">
					{photos.map((photo, index) => (
						<ThumbnailCard
							key={index}
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
