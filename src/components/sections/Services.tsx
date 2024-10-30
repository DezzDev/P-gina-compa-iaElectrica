import {CardService} from "@/components/CardService"
import { Wrench, Zap, Shield } from "lucide-react"

export function Services(){
	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
		<div className="container">
			<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Nuestros Servicios</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

				<CardService
					icon={<Wrench className="h-12 w-12 text-primary" />}
					title="Instalaciones Eléctricas"
					content="Instalaciones seguras y eficientes para su hogar o negocio."
				/>
				<CardService
					icon={<Zap className="h-12 w-12 text-primary" />}
					title="Reparaciones"
					content="Soluciones rápidas y efectivas para cualquier problema eléctrico."
				/>
				<CardService
					icon={<Shield className="h-12 w-12 text-primary" />}
					title="Mantenimiento"
					content="Instalaciones seguras y eficientes para su hogar o negocio."
				/>					

			</div>
		</div>
	</section>
	)
}