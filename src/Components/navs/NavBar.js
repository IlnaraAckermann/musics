import React, { useEffect, useState } from "react";
import ApiService from "../../services/ApiService";
import "./style.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
	const [loading, setLoading] = useState(false);
	const [dataIsEmpty, setDataIsEmpty] = useState(true);
	const [albuns, setAlbuns] = useState([]);

	useEffect(() => {
		const fetchAlbuns = async () => {
			try {
				const albunsData = await ApiService.getAlbumIds();
				setAlbuns(albunsData);
				if (albunsData.length !== 0) {
					setDataIsEmpty(false);
				} else {
					setDataIsEmpty(true);
				}
			} catch (e) {
				console.error("Erro ao obter os albuns");
			}
		};
		fetchAlbuns();
	}, [albuns]);

	const handleClick = async () => {
		if (loading) {
			return;
		}
		setLoading(true);
		const url = "https://jsonplaceholder.typicode.com/photos";
		try {
			await ApiService.postUrl(url);
			window.alert("Dados carregados com sucesso");
			setDataIsEmpty(false);
		} catch (error) {
			console.error("Erro na requisição:", error.message);
		}
	};

	return (
		<>
			<div className="header-container">
				<Link to="/">
					<h1 className="logo">My Musics</h1>
				</Link>
				<nav>
					<input
						type="checkbox"
						id="menu-hamburguer"
					/>
					<label htmlFor="menu-hamburguer">
						<div className="menu">
							<span className="hamburguer" />
						</div>
					</label>
					<ul>
						<CustonLink to='/'>Home</CustonLink>
						<CustonLink to='/albuns'>Albuns</CustonLink>
						<li className={dataIsEmpty ? "" : "d-none"}>
							<button onClick={handleClick}>Sincronizar Dados</button>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}

function CustonLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to)
	const isActive =useMatch({path: resolvedPath.pathname, end:true})
	return (
		<li className={isActive ? 'active':''}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	);
}


