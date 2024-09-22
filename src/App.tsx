
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/HomePage"
import Layout from "./pages/layout"
import './App.css'
import ContactPage from "./pages/contact/ContactPage"
import ServicesPage from "./pages/services/ServicesPage"
import AboutPage from "./pages/about/AboutPage"
import Page404 from "./pages/404/Page404"

function App() {


	return (


		<Routes>

			<Route path="/" element={<Layout />} >

				<Route index element={<Home />} />
				<Route path="/servicios" element={<ServicesPage />} />
				<Route path="/nosotros" element={<AboutPage />} />
				<Route path="/contacto" element={<ContactPage />} />
				<Route path="*" element={<Page404 />} />
				
			</Route>

		</Routes>




	)
}



export default App
