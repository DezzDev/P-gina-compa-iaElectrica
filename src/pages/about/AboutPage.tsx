import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, ThumbsUp } from "lucide-react"
import companyData from "@/data/company.json"

function AboutPage() {
	const teamMembers = [
		{ name: "María González", role: "Fundadora y CEO", image: "/placeholder.svg?height=200&width=200" },
		{ name: "Carlos Rodríguez", role: "Jefe de Operaciones", image: "/placeholder.svg?height=200&width=200" },
		{ name: "Ana Martínez", role: "Ingeniera Eléctrica Senior", image: "/placeholder.svg?height=200&width=200" },
		{ name: "Luis Sánchez", role: "Especialista en Energías Renovables", image: "/placeholder.svg?height=200&width=200" },
	]

	const values = [
		{ icon: Users, title: "Enfoque en el Cliente", description: "Priorizamos las necesidades y satisfacción de nuestros clientes en todo momento." },
		{ icon: Award, title: "Excelencia", description: "Nos esforzamos por ofrecer servicios de la más alta calidad en cada proyecto." },
		{ icon: Clock, title: "Puntualidad", description: "Respetamos el tiempo de nuestros clientes, cumpliendo plazos y horarios." },
		{ icon: ThumbsUp, title: "Integridad", description: "Actuamos con honestidad y transparencia en todas nuestras operaciones." },
	]

	return (


		<main className="flex-1">
			<section className="w-full pt-16 pb-12 md:py-24 lg:py-32 bg-blue-800 text-white">
				<div className="container px-4 md:px-6">
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
						Sobre {companyData.name}
					</h1>
					<p className="max-w-[700px] text-blue-100 md:text-xl">
						Somos una empresa líder en servicios eléctricos, comprometida con la excelencia y la innovación en cada proyecto que emprendemos.
					</p>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl  mb-8">
						Nuestra Historia
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						<div>
							<p className="mb-4">
								Fundada en 2005, ElectricidadPro nació con la visión de transformar la industria eléctrica en nuestra comunidad. Desde nuestros humildes comienzos como un pequeño negocio familiar, hemos crecido hasta convertirnos en un referente en el sector.
							</p>
							<p className="mb-4">
								A lo largo de los años, hemos ampliado nuestros servicios y conocimientos, adaptándonos a las nuevas tecnologías y tendencias en eficiencia energética y energías renovables.
							</p>
							<p >
								Hoy, con más de 15 años de experiencia, seguimos comprometidos con nuestra misión de proporcionar soluciones eléctricas innovadoras y sostenibles a nuestros clientes.
							</p>
						</div>
						<div className="flex justify-center">
							<img
								src="/placeholder.svg?height=400&width=400"
								alt="Equipo de ElectricidadPro"
								className="rounded-lg shadow-lg max-w-full h-auto"
								width={400}
								height={400}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-blue-100">
				<div className="container px-4 md:px-6">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800 mb-8 text-center">
						Nuestro Equipo
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
						{teamMembers.map((member, index) => (
							<Card key={index} className="bg-white">
								<CardHeader>
									<img
										src={member.image}
										alt={member.name}
										className="rounded-full w-32 h-32 mx-auto mb-4"
									/>
									<CardTitle>{member.name}</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription>{member.role}</CardDescription>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800 mb-8 text-center">
						Nuestros Valores
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{values.map((value, index) => (
							<Card key={index} className="bg-white">
								<CardHeader>
									<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
										<value.icon className="h-6 w-6 text-blue-600" />
									</div>
									<CardTitle>{value.title}</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription>{value.description}</CardDescription>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
		
		</main>

	)
}

export default AboutPage