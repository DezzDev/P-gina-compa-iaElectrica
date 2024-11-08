import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu, Zap } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import companyData from "@/data/company.json"


const navItems = {
	"/": "Inicio",
	"/servicios": "Servicios",
	"/nosotros": "Sobre Nosotros",
	"/blog": "Blog",
	"/contacto": "Contacto",

}



function Header() {

	// get path of the current page
	const path = useLocation().pathname	

	// menu mobile
	const [isOpen, setIsOpen] = useState(false)

	// header scroll
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const offset = window.scrollY
			if (offset >= 20) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener("scroll", handleScroll)
	}, [])

	const navigate = useNavigate()

	return (
		<header
			className={`fixed z-10 top-0 w-full text-primary-foreground transition-colors duration-500  ${scrolled ? "backdrop-blur supports-[backdrop-filter]:bg-primary/90" : "bg-transparent"}`}
		>
			<div className="container flex justify-between h-14 items-center max-w-screen-2xl">

				<a className="flex items-center justify-center" href="#">
					<Zap className="h-6 w-6 text-tertiary" />
					<span className="ml-2 text-lg font-semibold">{companyData.name}</span>
				</a>

				<nav className="hidden md:flex gap-6">

					{Object.entries(navItems).map(([key, label],index) => {
						
						return (
							<Link 
								to={key} 
								className={`text-md font-medium hover:text-orange-400 transition-colors 
									${key === path ? "text-tertiary" : ""}`}
								key={index}
							>
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
					<SheetContent side="right" className="w-[240px] sm:w-[300px] bg-primary text-primary-foreground border-none">
						<div className="flex flex-col h-full text-center">
							<div className="flex justify-center p-4 border-b border-primary-foreground/20">
								<span className="text-2xl text-center font-semibold">Menú</span>
							</div>

							<nav className="flex flex-col gap-4 p-4">

								{Object.entries(navItems).map(([key, label],index) => {
								
									return (
										<Link 
											onClick={()=>{setIsOpen(false)}} 
											to={key} 
											className={`text-md font-medium hover:text-orange-400 transition-colors
												${key === path ? "text-tertiary" : ""}`}
											key={index}
										>
											{label}
										</Link>
									)
								})}
							</nav>
							<div className="mt-auto border-t border-primary-foreground/20">
								<Button 
									className=" mt-4 bg-tertiary text-white text-md hover:bg-accent-tertiary"
									onClick={()=>{
										navigate("/contacto")
										setIsOpen(false)
									}}
								>
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