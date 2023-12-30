import React, { useEffect, useState } from "react";
import ApiService from "../services/ApiService";

const AlbumId = () => {
	const [albuns, setAlbuns] = useState([]);

	useEffect(() => {
		const fetchAlbuns = async () => {
			try {
				const albunsData = await ApiService.getAlbumIds();
				setAlbuns(albunsData);
			} catch (e) {
				console.error("Erro ao obter os albuns");
			}
		};
		fetchAlbuns();
	}, []);
	return (
		<>
			<main>
				<h1>Lista de Albuns</h1>
				<ul className="list-id">
					{albuns.map((album) => {
						const numeroFormatado = String(album.albumId).padStart(3, "0");
						return <a href={`/album/${album.albumId}`} key={album.id}>
              <li>AlbumID: {numeroFormatado}</li>
              </a>
					})}
				</ul>
			</main>
		</>
	);
};

export default AlbumId;
