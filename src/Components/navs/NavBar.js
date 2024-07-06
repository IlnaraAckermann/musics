import React, { useEffect, useState } from "react";
import ApiService from "../../services/ApiService";
import "./style.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
const baseUrl = "http://localhost:8080/api/music";
const url = "https://jsonplaceholder.typicode.com/photos";

export default function NavBar() {
	const postAlbums = () => {
		return ApiService.postUrl("https://jsonplaceholder.typicode.com/photos");
	};

	const {
		isLoading: loadingData,
		error,
		data,
		refetch,
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

	const {
		mutate: postAlbumsUrl,
		isLoading: postingData,
		isError,
	} = useMutation(postAlbums, {
		onSuccess: () => {
			refetch();
		},
	});

	const handleClick = async () => {
		postAlbumsUrl();
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
						<CustonLink to="/">Home</CustonLink>
						<CustonLink
							isDataEmpty={!data}
							to="/albuns"
						>
							Albuns
						</CustonLink>
						<li className={!data ? "" : "d-none"}>
							{error ? (
								<button
									onClick={refetch}
									disabled={loadingData || postingData}
								>
									{postingData ||
										(loadingData && <div className="custom-loader"></div>)}
									Tentar novamente
									<span style={{ marginLeft: "1ch" }}>
										<i className="fa-solid fa-redo"></i>
									</span>
								</button>
							) : (
								<button
									onClick={handleClick}
									disabled={loadingData || postingData}
								>
									{postingData ||
										(loadingData && <div className="custom-loader"></div>)}
									Sincronizar Dados
								</button>
							)}
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}

function CustonLink({ to, children, isDataEmpty, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<li className={isDataEmpty ? "d-none" : isActive ? "active" : ""}>
			<Link
				to={to}
				{...props}
			>
				{children}
			</Link>
		</li>
	);
}

export const SincButton = () => {
	return (
		<div>NavBar</div>
	)
}