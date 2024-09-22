import Footer from "@/components/Footer"
import Header from "@/components/Header"

import { Outlet } from "react-router-dom"

// interface props {
// 	children: ReactNode
// }




function Layout() {

	

	return (
		<>
			<Header />

			<main className="flex flex-col min-h-screen bg-blue-50">
				<Outlet />
			</main>

			<Footer />

		</>
	)
}



export default Layout
