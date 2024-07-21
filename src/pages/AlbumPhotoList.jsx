import React, { useEffect, useState } from "react";
import ThumbnailCard from "../Components/cards/thumbnailCard/ThumbnailCard";
import ApiService from "../services/ApiService";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

const AlbumPhotoList = ({ navigate }) => {
	const { id } = useParams();
	const [searchId, setSearchId] = useState("");


	const {
		isLoading: loadingData,
		error,
		data,
		refetch
	} = useQuery({
		queryKey: ["getPhotosByAlbumId", id],
		queryFn: () =>
			ApiService.getPhotosByAlbumId(id).then((response) => {
				return response;
			}),
		retry: 1, // retry once on failure
		refetchOnWindowFocus: false, // do not refetch on window focus
		refetchOnMount: false, // do not refetch on mount
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		if (searchId.toString() !== "") {
			navigate(`/album/${searchId}`);
		}
	};

	return (
		<>
			<main>
				{loadingData ? (
					<h2>Carregando...</h2>
				) : (
					<>
						{error && (
							<>
									<h2>Erro ao obter os dados</h2>

							</>
						)}
						{data && (
							<>
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
								{data.length === 0 && <h2>Album inexistente</h2>}
								<div className="list-id">
									{data.map((photo, index) => (
										<ThumbnailCard
											key={index}
											thumbnailUrl={photo.thumbnailURL}
											url={photo.url}
										/>
									))}
								</div>
							</>
						)}
					</>
				)}
			</main>
		</>
	);
};

export default AlbumPhotoList;
