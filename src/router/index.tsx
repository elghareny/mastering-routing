/** @format */

import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import HomePage from "../pages";
import ContactPage from "../pages/Contact";
import AboutPage from "../pages/About";
import RootLayout from "../pages/Layout";
import LearnLayout from "../pages/learn/Layout";
import QuickStartPage from "../pages/learn";
import ThinkingInReact from "../pages/learn/ThinkingInReact";
import Installation from "../pages/learn/Installation";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			{/* Root Layout */}
			<Route
				path='/'
				element={<RootLayout />}>
				<Route
					index
					element={<HomePage />}
				/>
				<Route
					path='contact'
					element={<ContactPage />}
				/>
				<Route
					path='about'
					element={<AboutPage />}
				/>
			</Route>
			,{/* Learn Layout */}
			<Route
				path='/learn'
				element={<LearnLayout />}>
				<Route
					index
					element={<QuickStartPage />}
				/>
				<Route
					path='thinking-in-react'
					element={<ThinkingInReact />}
				/>
				<Route
					path='installation'
					element={<Installation />}
				/>
			</Route>
		</>,
	),
);

export default router;
