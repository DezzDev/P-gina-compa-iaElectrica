import { Services } from "@/components/sections/Services"
import { Contact } from "@/components/sections/Contact"
import companyData from "@/data/company.json"


export default function ServicesPage() {
	
	
	
	return (
		<>
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

		</>


	)
}