import { Menu, Zap } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"




const NavItems = ({ mobile = false }) => (
	<>
		<Link to="/" className={`text-md font-medium hover:text-orange-400 transition-colors ${mobile ? 'text-blue-100' : ''}`}>
			Inicio
		</Link>
		<Link to="servicios" className={`text-md font-medium hover:text-orange-400 transition-colors ${mobile ? 'text-blue-100' : ''}`}>
			Servicios
		</Link>
		<Link to="nosotros" className={`text-md font-medium hover:text-orange-400 transition-colors ${mobile ? 'text-blue-100' : ''}`} >
			Sobre Nosotros
		</Link>
		<Link to="contacto" className={`text-smd font-medium hover:text-orange-400 transition-colors ${mobile ? 'text-blue-100' : ''}`} >
			Contacto
		</Link>
	</>
)

function Header() {

	// menu mobile
	const [isOpen, setIsOpen] = useState(false)

	// header scroll
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY
			if (offset >= 100) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener("scroll", handleScroll)
	}, [])

	return (
		<header
			className={`h-16 px-4 lg:px-6 flex items-center fixed z-10 w-full text-white transition-colors duration-700 ${scrolled ? "bg-black opacity-80" : "bg-transparent"}`}
		>

		

			<a className="flex items-center justify-center" href="#">
				<Zap className="h-6 w-6 text-orange-400" />
				<span className="ml-2 text-lg font-semibold">DyCE</span>
			</a>

			<nav className="ml-auto hidden md:flex gap-6">
				<NavItems />
			</nav>

			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild className="md:hidden">
					<Button variant="ghost" size="icon" className="ml-auto text-white hover:bg-blue-700">
						<Menu className="h-6 w-6" />
						<span className="sr-only">Abrir menú</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="right" className="w-[240px] sm:w-[300px] bg-blue-700 text-white p-0">
					<div className="flex flex-col h-full">
						<div className="flex items-center justify-between p-4 border-b border-blue-600">
							<span className="text-2xl font-semibold">Menú</span>
						</div>
						<nav className="flex flex-col gap-4 p-4">
							<NavItems mobile />
						</nav>
						<div className="mt-auto p-4 border-t border-blue-600">
							<Button className="w-full bg-orange-500 text-white text-md hover:bg-orange-600">
								Contactar
							</Button>
						</div>
					</div>
				</SheetContent>
			</Sheet>

		</header>
	)
}

export default Header