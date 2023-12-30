import "./style.css";
function NavBar() {
	return (
		<>
			<div className="header-container">
				<a href="/">
					<h1 className="logo">My Musics</h1>
				</a>
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
						<li>
							<a href="/" className="active">Home</a>
						</li>
						<li>
							<a href="/albuns">Albuns</a>
						</li>
						<li>
							<a href="/photos">Sincronizar Dados</a>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}

export default NavBar;
