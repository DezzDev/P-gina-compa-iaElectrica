import { ThumbsUp, Clock, Shield } from "lucide-react";

const data = [
	{
		title: "Calidad Garantizada",
		description: "Nuestro trabajo está respaldado por una garantía de satisfacción.",
		icon: ThumbsUp
	},
	{
		title: "Servicio 24/7",
		description: "Estamos disponibles las 24 horas para emergencias eléctricas.",
		icon: Clock
	},
	{
		title: "Profesionales Certificados",
		description: "Nuestro equipo está compuesto por electricistas certificados y experimentados.",
		icon: Shield
	},
]


export function ChooseUs() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

				<div className="container max-w-[600px]">
					<h2 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-4xl lg:mb-16 lg:text-5xl">
						¿Por Qué Elegirnos?
					</h2>
					<div className="flex flex-col gap-y-4">
						{data.map((item, index) => {
							return (
								<div key={index} className="flex gap-x-4">
									<item.icon className="h-8 w-8 min-w-8 text-primary" />
									<div>
										<h3 className="text-xl lg:text-2xl font-bold mb-2">{item.title}</h3>
										<p className="sm:text-lg lg:text-xl">{item.description}</p>
									</div>
								</div>
							)
						})}

					</div>
				</div>

				<div className="flex justify-end">
					<img
						src="/electricista2.webp"
						alt="Equipo de ElectricidadPro"
						className="shadow-lg max-w-full h-auto "

					/>
				</div>
			</div>

		</section>
	)
}

{/* <div className="flex space-x-4">
	<ThumbsUp className="h-8 w-8 text-primary" />
	<div>
		<h3 className="text-xl font-bold mb-2">Calidad Garantizada</h3>
		<p>Nuestro trabajo está respaldado por una garantía de satisfacción.</p>
	</div>
</div> */}