
import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/home/HomePage"
import Layout from "./pages/layout"
import './App.css'
import ContactPage from "./pages/contact/ContactPage"
import ServicesPage from "./pages/services/ServicesPage"

function App() {


	return (


		<Routes>

			<Route path="/" element={<Layout />} >

				<Route index element={<Home />} />
				<Route path="/contacto" element={<ContactPage />} />
				<Route path="/servicios" element={<ServicesPage />} />
				<Route path="*" element={<NoMatch />} />
			</Route>

		</Routes>




	)
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}


export default App
