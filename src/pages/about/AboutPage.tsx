import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, ThumbsUp } from "lucide-react"
import companyData from "@/data/company.json"
import { CardValues, ListValues } from "@/components/CardValues"
import { Separator } from "@/components/Separator"
import { Contact } from "@/components/sections/Contact"

function AboutPage() {
	const teamMembers = [
		{ name: "Daniel Zapata", role: "Fundador y CEO", image: "/perfil.jpg" },



	]

	const values = [
		{ icon: Users, title: "Enfoque en el Cliente", description: "Priorizamos las necesidades y satisfacción de nuestros clientes en todo momento." },
		{ icon: Award, title: "Excelencia", description: "Nos esforzamos por ofrecer servicios de la más alta calidad en cada proyecto." },
		{ icon: Clock, title: "Puntualidad", description: "Respetamos el tiempo de nuestros clientes, cumpliendo plazos y horarios." },
		{ icon: ThumbsUp, title: "Integridad", description: "Actuamos con honestidad y transparencia en todas nuestras operaciones." },
	]

	return (


		<main className="flex-1">

			<section className="w-full pt-16 pb-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
				<div className="container px-4 md:px-6">
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
						Sobre {companyData.name}
					</h1>
					<p className="max-w-[700px] text-blue-100 md:text-xl">
						Somos una empresa líder en servicios eléctricos, comprometida con la excelencia y la innovación en cada proyecto que emprendemos.
					</p>
				</div>
			</section>

			{/* history */}
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<div className="pl-4 md:pl-6">
						<h2 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-4xl  lg:mb-16 lg:text-5xl">
							Nuestra Historia
						</h2>
						<div>
							<p className="mb-4">
								Fundada en 2005, DyCE nació con la visión de transformar la industria eléctrica en nuestra comunidad. Desde nuestros humildes comienzos como un pequeño negocio familiar, hemos crecido hasta convertirnos en un referente en el sector.
							</p>
							<p className="mb-4">
								A lo largo de los años, hemos ampliado nuestros servicios y conocimientos, adaptándonos a las nuevas tecnologías y tendencias en eficiencia energética y energías renovables.
							</p>
							<p >
								Hoy, con más de 15 años de experiencia, seguimos comprometidos con nuestra misión de proporcionar soluciones eléctricas innovadoras y sostenibles a nuestros clientes.
							</p>
						</div>

					</div>
					<div className="flex justify-end">
						<img
							src="/electricista1.webp"
							alt="Equipo de ElectricidadPro"
							className="shadow-lg max-w-full h-auto "

						/>
					</div>
				</div>

			</section>

			{/* separator */}
			<Separator />

			{/* team */}
			{/* <section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<h2 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-4xl  lg:mb-16 lg:text-5xl">
						Nuestro Equipo
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
						{teamMembers.map((member, index) => (
							<Card key={index} className="shadow-md">
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
			</section> */}

			

			{/* values */}
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<div className="container">
						<h2 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-4xl lg:mb-16 lg:text-5xl">
							Nuestros Valores
						</h2>
						<div className="flex flex-col gap-y-2 lg:gap-y-4 mx-auto max-w-[600px]">
							{values.map((value, index) => (
								<ListValues
									key={index}
									title={value.title}
									description={value.description}
									icon={<value.icon className="h-8 w-8 text-primary" />}
								/>
							))}

						</div>

					</div>
					<div className="flex justify-end">
						<img
							src="/electricista3.webp"
							alt="Equipo de ElectricidadPro"
							className="shadow-lg max-w-full h-auto "

						/>
					</div>

				</div>
			</section>

			{/* contact */}
			<Contact bgSection="bg-primary" textSection="text-primary-foreground" />

		</main>

	)
}

export default AboutPage