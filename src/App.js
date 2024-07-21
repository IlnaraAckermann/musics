import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/navs/NavBar";
import AppRouters from "./Routers";
import Footer from "./Components/footer/Footer";
import {
	QueryClient,
	QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();
const App = () => {
	return (
		<>
			<React.StrictMode>
				<QueryClientProvider client={queryClient}>
					<BrowserRouter>
						<NavBar />
						<AppRouters />
						<Footer />
					</BrowserRouter>
				</QueryClientProvider>
			</React.StrictMode>
		</>
	);
};

export default App;
