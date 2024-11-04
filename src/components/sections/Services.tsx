import {CardService} from "@/components/CardService"
import { Wrench, Zap, Shield } from "lucide-react"

export function Services(){

	const services = [
    { icon: Wrench, title: "Instalaciones Eléctricas", description: "Instalaciones seguras y eficientes para su hogar o negocio." },
    { icon: Shield, title: "Mantenimiento", description: "Servicios de mantenimiento preventivo para evitar futuros problemas." },   
    { icon: Zap, title: "Energía Renovable", description: "Instalación de sistemas de energía solar y otras fuentes renovables." },
  ]

	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
		<div className="container">
			<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Qué ofrecemos</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{services.map((service,index) =>(
					<CardService
						key={index}
						icon={<service.icon className="h-12 w-12 text-primary" />}
						title={service.title}
						description="Instalaciones seguras y eficientes para su hogar o negocio."
					/>
				))}
			</div>
		</div>
	</section>
	)
}