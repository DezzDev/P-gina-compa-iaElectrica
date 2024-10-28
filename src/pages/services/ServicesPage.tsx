import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Wrench, Shield, Power, Lightbulb, Home, Building, Factory, Plug, Cpu, Wifi, Settings } from "lucide-react"

export default function ServicesPage() {
 

  

  const services = [
    { icon: Wrench, title: "Instalaciones Eléctricas", description: "Instalaciones seguras y eficientes para su hogar o negocio." },
    { icon: Settings, title: "Reparaciones", description: "Soluciones rápidas y efectivas para cualquier problema eléctrico." },
    { icon: Shield, title: "Mantenimiento", description: "Servicios de mantenimiento preventivo para evitar futuros problemas." },
    { icon: Plug, title: "Actualizaciones de Panel", description: "Modernización de paneles eléctricos para mayor seguridad y eficiencia." },
    { icon: Lightbulb, title: "Iluminación", description: "Diseño e instalación de sistemas de iluminación eficientes y atractivos." },
    { icon: Home, title: "Servicios Residenciales", description: "Soluciones eléctricas completas para hogares." },
    { icon: Building, title: "Servicios Comerciales", description: "Instalaciones y mantenimiento para negocios y oficinas." },
    { icon: Factory, title: "Servicios Industriales", description: "Soluciones eléctricas robustas para entornos industriales." },
    { icon: Cpu, title: "Automatización", description: "Implementación de sistemas de automatización eléctrica." },
    { icon: Wifi, title: "Redes Eléctricas Inteligentes", description: "Instalación y configuración de redes eléctricas inteligentes." },
    { icon: Zap, title: "Energía Renovable", description: "Instalación de sistemas de energía solar y otras fuentes renovables." },
    { icon: Power, title: "Eficiencia Energética", description: "Auditorías y soluciones para optimizar el consumo eléctrico." }
  ]

  return (
  
    
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-800 text-white">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
              Nuestros Servicios
            </h1>
            <p className="max-w-[700px] text-blue-100 md:text-xl">
              En DyCE, ofrecemos una amplia gama de servicios eléctricos para satisfacer todas sus necesidades, desde instalaciones residenciales hasta soluciones industriales complejas.
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="bg-white">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-tertiary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-100">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800 mb-4">
              ¿Necesita un servicio personalizado?
            </h2>
            <p className="max-w-[600px] mx-auto text-blue-700 md:text-xl mb-8">
              Contáctenos para discutir sus necesidades específicas. Nuestro equipo de expertos está listo para ayudarle con cualquier proyecto eléctrico.
            </p>
            <Button className="bg-orange-500 text-white hover:bg-orange-600">
              Solicitar Presupuesto
            </Button>
          </div>
        </section>
      </div>
     
    
  )
}