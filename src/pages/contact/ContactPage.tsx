import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

function ContactPage() {

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Aquí iría la lógica para manejar el envío del formulario
    console.log("Formulario enviado")

  }
	return (
		 <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-800 text-white">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
              Contacta con DyCE
            </h1>
            <p className="max-w-[700px] text-blue-100 md:text-xl">
              Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros para cualquier consulta o servicio que necesites.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-blue-800 mb-4">
                  Información de Contacto
                </h2>
                <Card className="bg-white mb-4">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Teléfono</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>+34 123 456 789</CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-white mb-4">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Email</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>info@dyce.com</CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Dirección</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>Calle Principal 123, 28001 Madrid, España</CardDescription>
                  </CardContent>
                </Card>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-blue-800 mb-4">
                  Envíanos un Mensaje
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Nombre" required />
                  <Input type="email" placeholder="Email" required />
                  <Input placeholder="Asunto" required />
                  <Textarea placeholder="Mensaje" required />
                  <Button type="submit" className="w-full bg-orange-500 text-white hover:bg-orange-600">
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-100">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800 mb-4">
              Horario de Atención
            </h2>
            <p className="max-w-[600px] mx-auto text-blue-700 md:text-xl mb-8">
              Lunes a Viernes: 9:00 AM - 6:00 PM<br />
              Sábados: 10:00 AM - 2:00 PM<br />
              Domingos: Cerrado
            </p>
            <p className="text-blue-700 md:text-xl">
              Para emergencias fuera de horario, llámanos al +34 987 654 321
            </p>
          </div>
        </section>
      </main>
	)
}

export default ContactPage