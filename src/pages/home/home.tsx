import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Zap, Clock, Shield, ThumbsUp, Wrench } from "lucide-react"
import imgHero from "@/assets/hero-image.jpg"
import silueta from "@/assets/silueta-electricista.jpeg"

export default function Component() {

	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")



	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (name && phone) {
			const message = `Hola, soy ${name}. Me gustaría obtener más información sobre sus servicios eléctricos.`
			const whatsappUrl = `https://wa.me/672608183?text=${encodeURIComponent(message)}`
			window.open(whatsappUrl, '_blank')
		} else {
			alert("Por favor, complete todos los campos.")
		}
	}

	return (
		<>
			<section className="hero-section w-full  py-12 md:py-24 lg:py-32 xl:py-48  text-white">
				
				

				<div className="absolute top-1/3 z-10 px-4 md:px-6">
					<div className="grid grid-cols-1 gap-8 items-center">
						<div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
									Soluciones Eléctricas Profesionales
								</h1>
								<p className="mx-auto md:mx-0 max-w-[700px] text-blue-100 md:text-xl">
									Expertos en instalaciones y reparaciones eléctricas. Servicio confiable y eficiente para hogares y negocios.
								</p>
							</div>
							<div className="flex flex-wrap gap-4 justify-center">
								<Button className="bg-orange-500 text-white hover:bg-orange-600">Solicitar Presupuesto</Button>
								<Button variant="outline" className="text-white border-white hover:bg-blue-700">
									Nuestros Servicios
								</Button>
							</div>
						</div>
						{/* <div className="flex justify-center ">
							<img
								src={imgHero}
								alt="Electricista profesional trabajando"
								className="rounded-lg shadow-lg max-w-full h-auto"
								width={400}
								height={400}
							/>
						</div> */}
					</div>
				</div>

				<div className="h-ful w-full blur-sm">
					<img src={silueta} alt="silueta electricista" />
				</div>

			</section>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-white">
				<div className="container px-4 md:px-6">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-800">Nuestros Servicios</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="flex flex-col items-center text-center">
							<Wrench className="h-12 w-12 mb-4 text-orange-500" />
							<h3 className="text-xl font-bold mb-2 text-blue-800">Instalaciones Eléctricas</h3>
							<p className="text-blue-600">Instalaciones seguras y eficientes para su hogar o negocio.</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<Zap className="h-12 w-12 mb-4 text-orange-500" />
							<h3 className="text-xl font-bold mb-2 text-blue-800">Reparaciones</h3>
							<p className="text-blue-600">Soluciones rápidas y efectivas para cualquier problema eléctrico.</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<Shield className="h-12 w-12 mb-4 text-orange-500" />
							<h3 className="text-xl font-bold mb-2 text-blue-800">Mantenimiento</h3>
							<p className="text-blue-600">Servicios de mantenimiento preventivo para evitar futuros problemas.</p>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-blue-100">
				<div className="container px-4 md:px-6">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-800">Por Qué Elegirnos</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="flex items-start space-x-4">
							<ThumbsUp className="h-8 w-8 text-orange-500" />
							<div>
								<h3 className="text-xl font-bold mb-2 text-blue-800">Calidad Garantizada</h3>
								<p className="text-blue-700">Nuestro trabajo está respaldado por una garantía de satisfacción.</p>
							</div>
						</div>
						<div className="flex items-start space-x-4">
							<Clock className="h-8 w-8 text-orange-500" />
							<div>
								<h3 className="text-xl font-bold mb-2 text-blue-800">Servicio 24/7</h3>
								<p className="text-blue-700">Estamos disponibles las 24 horas para emergencias eléctricas.</p>
							</div>
						</div>
						<div className="flex items-start space-x-4">
							<Shield className="h-8 w-8 text-orange-500" />
							<div>
								<h3 className="text-xl font-bold mb-2 text-blue-800">Profesionales Certificados</h3>
								<p className="text-blue-700">Nuestro equipo está compuesto por electricistas certificados y experimentados.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								¿Listo para mejorar su sistema eléctrico?
							</h2>
							<p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
								Contáctenos hoy para un presupuesto gratuito y descubra cómo podemos ayudarle con sus necesidades eléctricas.
							</p>
						</div>
						<div className="w-full max-w-sm space-y-2">
							<form onSubmit={handleSubmit} className="flex flex-col space-y-4">
								<Input
									className="bg-white text-blue-800"
									placeholder="Ingrese su nombre"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
								<Input
									className="bg-white text-blue-800"
									placeholder="Ingrese su número de teléfono"
									type="tel"
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
									required
								/>
								<Button className="bg-orange-500 text-white hover:bg-orange-600" type="submit">
									Contactar por WhatsApp
								</Button>
							</form>
						</div>
					</div>
				</div>
			</section>



		</>
	)
}