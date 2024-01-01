import React, { useEffect, useState } from "react";
import ApiService from "../services/ApiService";
import { Link } from "react-router-dom";

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
				<h1 className="title">Lista de Albuns</h1>
				<ul className="list-id">
					{albuns.map((album, index) => {
						const numeroFormatado = String(album.albumId).padStart(3, "0");
						return (
								<Link to={`/album/${album.albumId}`}  key={index} className="album-id">
							<li>
									AlbumID: {numeroFormatado}
							</li>
								</Link>
						);
					})}
				</ul>
			</main>
		</>
	);
};

export default AlbumId;
