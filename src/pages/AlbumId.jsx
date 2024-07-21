import React, { useEffect, useState } from "react";
import ApiService from "../services/ApiService";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

const AlbumId = () => {
	const {
		isLoading: loadingData,
		error,
		data,
	} = useQuery({
		queryKey: ["getAlbuns"],
		queryFn: () =>
			ApiService.getAlbumIds().then((response) => {
				return response;
			}),
		retry: 1, // retry once on failure
		refetchOnWindowFocus: false, // do not refetch on window focus
		refetchOnMount: false, // do not refetch on mount
	});
	return (
		<main>
			{loadingData ? <h2>Carregando...</h2> : (
				<>
					{error && <h2>Erro ao obter os dados</h2>}
					{data && (
						<>
							<h1 className="title">Lista de Albuns</h1>
							<ul className="list-id">
								{data.map((album, index) => {
									const numeroFormatado = String(album.albumId).padStart(3, "0");
									return (
										<Link
											to={`/album/${album.albumId}`}
											key={index}
											className="album-id"
										>
											<li>AlbumID: {numeroFormatado}</li>
										</Link>
									);
								})}
							</ul>
						</>
					)}
				</>
			)}
		</main>
	);
};

export default AlbumId;
