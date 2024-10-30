import { ThumbsUp, Clock, Shield } from "lucide-react";


export function ChooseUs(){
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 ">
				<div className="container">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">¿Por Qué Elegirnos?</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="flex items-start space-x-4">
							<ThumbsUp className="h-8 w-8 text-primary" />
							<div>
								<h3 className="text-xl font-bold mb-2">Calidad Garantizada</h3>
								<p >Nuestro trabajo está respaldado por una garantía de satisfacción.</p>
							</div>
						</div>
						<div className="flex items-start space-x-4">
							<Clock className="h-8 w-8 text-primary" />
							<div>
								<h3 className="text-xl font-bold mb-2">Servicio 24/7</h3>
								<p>Estamos disponibles las 24 horas para emergencias eléctricas.</p>
							</div>
						</div>
						<div className="flex items-start space-x-4">
							<Shield className="h-8 w-8 text-primary" />
							<div>
								<h3 className="text-xl font-bold mb-2">Profesionales Certificados</h3>
								<p>Nuestro equipo está compuesto por electricistas certificados y experimentados.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
	)
}