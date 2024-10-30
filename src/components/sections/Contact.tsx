import { useState } from "react"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"


export function Contact(){
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

	return(
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
	)
}