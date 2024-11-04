import companyData from "@/data/company.json"

function Footer() {
	return (
		<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-blue-800 text-white">
			<p className="text-xs">© 2023 {companyData.name}. Todos los derechos reservados.</p>
			<nav className="sm:ml-auto flex gap-4 sm:gap-6">
				<a className="text-xs hover:underline underline-offset-4" href="#">
					Términos de Servicio
				</a>
				<a className="text-xs hover:underline underline-offset-4" href="#">
					Privacidad
				</a>
			</nav>
		</footer>
	)
}

export default Footer