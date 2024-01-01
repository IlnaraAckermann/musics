import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/navs/NavBar";
import AppRouters from "./Routers";
import Footer from "./Components/footer/Footer";
const App = () => {
	return (
		<>
			<React.StrictMode>
				<BrowserRouter>
					<div className="all">
						<NavBar />
						<AppRouters />
						<Footer />
					</div>
				</BrowserRouter>
			</React.StrictMode>
		</>
	);
};

export default App;