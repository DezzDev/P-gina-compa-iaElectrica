
import { Routes,Route } from "react-router-dom"
import Home from "./pages/home/HomePage"
import Layout from "./pages/layout"
import './App.css'
import ContactPage from "./pages/contact/ContactPage"
import ServicesPage from "./pages/services/ServicesPage"

function App() {
  

  return (
		
			<Layout>
      	<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contacto" element={<ContactPage />} />
					<Route path="/servicios" element={<ServicesPage />} />
					
				</Routes>
				
				
			</Layout>
    
  )
}

export default App
