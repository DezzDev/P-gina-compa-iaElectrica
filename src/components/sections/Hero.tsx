import {Button} from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import silueta from "@/assets/silueta-electricista.webp"

export function Hero (){
	const navigate = useNavigate()
	return(
		<section className="relative py-12 md:py-24 lg:py-32 xl:py-48 text-white bg-black h-screen">

				{/* img hero */}
				<div
					className="absolute inset-0 bg-cover bg-center filter blur-sm"
					style={{ backgroundImage: `url(${silueta})` }}
				></div>

				{/* overlay oscuro */}
				<div
					className="absolute inset-0 bg-black opacity-60"
				></div>

				{/* texto hero */}
				<div className="container absolute inset-0 flex justify-center items-center">

					<div className="flex flex-col items-center gap-y-10 lg:gap-y-14">
						<div className="flex flex-col gap-y-4 items-center drop-shadow-lg  text-center lg:gap-y-8">
							<h1 className="text-4xl font-bold sm:text-5xl  lg:text-7xl/none">
								Soluciones Eléctricas Profesionales
							</h1>
							<p className="text-xl max-w-[700px] md:text-2xl">
								Expertos en instalaciones y reparaciones eléctricas. Servicio confiable y eficiente para hogares y negocios.
							</p>
						</div>
						<div className="flex flex-wrap gap-4 justify-center">
							<Button
								variant="outline"
								className="bg-tertiary text-md  hover:bg-accent-tertiary hover:text-white"
								onClick={() => navigate("/contacto")}
							>
								Solicitar Presupuesto
							</Button>
							<Button
								variant="outline"
								className="bg-black opacity-90 text-white  text-md drop-shadow-lg text-outline hover:bg-black hover:opacity-100 hover:text-white"
								onClick={() => navigate("/servicios")}
							>
								Nuestros Servicios
							</Button>
						</div>
					</div>


				</div>

			</section>
	)
}