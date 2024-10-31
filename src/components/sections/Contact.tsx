import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { toast } from "sonner"
import {PhoneIcon , Zap} from "lucide-react"
import { Label } from "@/components/ui/label"


export function Contact() {


	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [tabState, setTabState] = useState("whatsapp")


	const handleSubmit = () => {
		if (tabState === "whatsapp") {
			if (name !== "") {
				const message = `Hola, soy ${name}. Me gustaría obtener más información sobre sus servicios eléctricos.`
				const whatsappUrl = `https://wa.me/672608183?text=${encodeURIComponent(message)}`
				window.open(whatsappUrl, '_blank')
			} else {
				toast.warning("Por favor, escribe tu nombre.")
			}
		} else {
			if (name !== "" && email !== "") {
				const subject = `Solicitud presupuesto ${name}`
				const body = `Nombre: ${name} \n Email: ${email} \n\n deseo solicitar un presupuesto`

				const mailtoUrl = `mailto:daniel-dezz@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

				window.location.href = mailtoUrl
			} else {
				toast.warning("Por favor, déjanos tu nombre y email.")
			}
		}
	}

	const handleTabChange = (value: string) => {
		if (value === "whatsapp") {
			setTabState("whatsapp")
		} else {
			setTabState("email")
		}
	}



	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
			<div className="container">


				<div className="flex flex-col items-center gap-y-4">

					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter text-primary-foreground text-center sm:text-4xl md:text-5xl">
							¿Listo para mejorar su sistema eléctrico?
						</h2>
						<p className="mx-auto max-w-[600px] text-primary-foreground text-center md:text-xl">
							Contáctenos hoy para un presupuesto gratuito y descubra cómo podemos ayudarle con sus necesidades eléctricas.
						</p>
					</div>

					<div className="grid md:grid-cols-2  justify-center gap-4">
						<Card className="flex flex-col justify-evenly items-center">
							<CardHeader>
								<CardTitle>
									Llámanos sin compromiso
								</CardTitle>
								<CardDescription className="text-center">
									Obtén un presupuesto gratuito.
								</CardDescription>
							</CardHeader>
							<CardContent className="flex flex-col justify-center  gap-6">
								<div className="flex items-center gap-4">
									<Button size={"icon"} className="rounded-full"> 
										<Zap /> 
									</Button>
									<span className="font-bold text-lg md:text-xl">DyCE</span>
								</div>
							</CardContent>
							<CardFooter>
								<a href="tel:672608183" className="flex flex-wrap gap-4  items-center text-tertiary text-xl md:text-2xl">
									<PhoneIcon  />
									<span className="underline">672608183</span>
								</a>

							</CardFooter>
						</Card>

						<Tabs defaultValue="whatsapp" onValueChange={handleTabChange} className="w-[400px]  ">

							<TabsList className="grid w-full grid-cols-2">
								<TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
								<TabsTrigger value="email">Email</TabsTrigger>
							</TabsList>

							{/* whatsapp */}

							<TabsContent value="whatsapp">
								<Card >
									<CardHeader >
										<CardTitle>
											Envíanos un WhatsApp
										</CardTitle>
										<CardDescription>
											y nos pondremos en contacto
										</CardDescription>

									</CardHeader>
									<CardContent className="space-y-2">
										<Label>
											Nombre
										</Label>
										<Input
											placeholder="Ingrese su nombre"
											value={name}
											onChange={(e) => setName(e.target.value)}
											required
										/>
									</CardContent>
									<CardFooter>
										<Button
											className="bg-tertiary  hover:bg-accent-tertiary"
											onClick={handleSubmit}
										>
											Enviar WhatsApp
										</Button>
									</CardFooter>

								</Card>
							</TabsContent>

							{/* email */}

							<TabsContent value="email">

								<Card >
									<CardHeader >
										<CardTitle>
											Envíanos un Email
										</CardTitle>
										<CardDescription>
											y nos pondremos en contacto
										</CardDescription>

									</CardHeader>
									<CardContent>
										<div className="space-y-2">
											<Label>
												Nombre
											</Label>
											<Input
												placeholder="Ingrese su nombre"
												value={name}
												onChange={(e) => setName(e.target.value)}
												required
											/>
										</div>
										<div className="space-y-2">
											<Label>
												Email
											</Label>
											<Input
												placeholder="Ingrese su email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
												required
											/>
										</div>

									</CardContent>
									<CardFooter>
										<Button
											className="bg-tertiary  hover:bg-accent-tertiary"
											onClick={handleSubmit}
										>
											Enviar Email
										</Button>
									</CardFooter>

								</Card>

							</TabsContent>
						</Tabs>
					</div>


				</div>


			</div>

		</section>
	)
}