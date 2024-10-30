import { Menu, Zap } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"




// const NavItems = () => (
// 	<>
// 		<Link to="/" className={`text-md font-medium hover:text-orange-400 transition-colors`}>
// 			Inicio
// 		</Link>
// 		<Link to="servicios" className={`text-md font-medium hover:text-orange-400 transition-colors`}>
// 			Servicios
// 		</Link>
// 		<Link to="nosotros" className={`text-md font-medium hover:text-orange-400 transition-colors`} >
// 			Sobre Nosotros
// 		</Link>
// 		<Link to="contacto" className={`text-smd font-medium hover:text-orange-400 transition-colors`} >
// 			Contacto
// 		</Link>
// 	</>
// )

const NavLinks = {
	inicio: "Inicio",
	servicios: "Servicios",
	nosotros: "Sobre Nosotros",
	contacto: "Contacto"

}



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
			className={`fixed z-10 top-0 w-full border-border/40 text-white transition-colors duration-500  ${scrolled ? "backdrop-blur supports-[backdrop-filter]:bg-primary/80" : "bg-transparent"}`}
		>
			{/* class="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" */}
			{/* h-16 px-4 lg:px-6 flex items-center sticky z-10 w-full text-white transition-colors duration-700 ${scrolled ? "bg-blue-950 opacity-80" : "bg-transparent"} */}

			<div className="container flex justify-between h-14 items-center max-w-screen-2xl">

				<a className="flex items-center justify-center" href="#">
					<Zap className="h-6 w-6 text-orange-400" />
					<span className="ml-2 text-lg font-semibold">DyCE</span>
				</a>

				<nav className="hidden md:flex gap-6">

					{Object.entries(NavLinks).map(([key, label]) => {
						let destination = ""
						if (key == "inicio") {
							destination = "/"
						} else {
							destination = key
						}
						return (
							<Link to={destination} className={`text-md font-medium hover:text-orange-400 transition-colors`}>
								{label}
							</Link>
						)
					})}

				</nav>

				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild className="md:hidden">
						<Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-transparent hover:text-primary-foreground">
							<Menu className="h-6 w-6" />
							<span className="sr-only">Abrir menú</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="right" className="w-[240px] sm:w-[300px] bg-primary text-primary-foreground">
						<div className="flex flex-col h-full text-center">
							<div className="flex justify-center p-4 border-b border-primary-foreground/20">
								<span className="text-2xl text-center font-semibold">Menú</span>
							</div>

							<nav className="flex flex-col gap-4 p-4">

								{Object.entries(NavLinks).map(([key, label]) => {
									let destination = ""
									if (key == "inicio") {
										destination = "/"
									} else {
										destination = key
									}
									return (
										<Link onClick={()=>{setIsOpen(false)}} to={destination} className={`text-md font-medium hover:text-orange-400 transition-colors`}>
											{label}
										</Link>
									)
								})}
							</nav>
							<div className="mt-auto p-4 border-t border-primary-foreground/20">
								<Button className="w-full bg-orange-500 text-white text-md hover:bg-orange-600">
									Solicitar presupuesto
								</Button>
							</div>
						</div>
					</SheetContent>
				</Sheet>

			</div>


		</header>
	)
}

export default Header