import { Button } from "@/components/ui/button"
import companyData from "@/data/company.json"
import { Services } from "@/components/sections/Services"
import { useNavigate } from "react-router-dom"
import { Contact } from "@/components/sections/Contact"

export default function ServicesPage() {
	const navigate = useNavigate()

	return (


		<div className="flex-1 ">
			<section className="w-full pt-16 pb-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
				<div className="container px-4 md:px-6">
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
						Nuestros Servicios
					</h1>
					<p className="max-w-[700px] text-blue-100 md:text-xl">
						En {companyData.name}, ofrecemos una amplia gama de servicios eléctricos para satisfacer todas sus necesidades, desde instalaciones residenciales hasta soluciones industriales complejas.
					</p>
				</div>
			</section>

			<Services />

			<Contact bgSection="bg-primary" textSection="text-primary-foreground" />

			{/* <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-100">
				<div className="container px-4 md:px-6 text-center">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl  mb-4">
						¿Necesita un servicio personalizado?
					</h2>
					<p className="max-w-[600px] mx-auto md:text-xl mb-8">
						Contáctenos para discutir sus necesidades específicas. Estamos listos para ayudarle con cualquier proyecto eléctrico.
					</p>
					<Button 
						className="bg-orange-500 text-white hover:bg-orange-600"
						onClick={()=>{navigate("/contacto")}}
					>
						Solicitar Presupuesto
					</Button>
				</div>
			</section> */}
		</div>


	)
}