import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Zap, Clock, Shield, ThumbsUp, Wrench, Menu } from "lucide-react"
import { ModeToggle } from "../components/ui/toggle-theme"

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)

  const NavItems = () => (
    <>
      <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
        Inicio
      </a>
      <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
        Servicios
      </a>
      <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
        Sobre Nosotros
      </a>
      <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
        Contacto
      </a>
    </>
  )

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6" />
          <span className="sr-only">ElectricidadPro</span>
        </a>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <NavItems />
        </nav>
        <ModeToggle />
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="ml-auto">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px]  sm:w-[300px] ">
            <nav className="flex flex-col gap-4">
              <NavItems />
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-foreground">
                  Soluciones Eléctricas Profesionales
                </h1>
                <p className="mx-auto max-w-[700px] text-foreground md:text-xl">
                  Expertos en instalaciones y reparaciones eléctricas. Servicio confiable y eficiente para hogares y negocios.
                </p>
              </div>

              <div className="space-x-4">
                <Button className=" bg-primary text-primary-foreground">Solicitar Presupuesto</Button>
                <Button variant="outline" className="bg-secondary text-secondary-foreground">
                  Nuestros Servicios
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Wrench className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Instalaciones Eléctricas</h3>
                <p className="text-gray-500">Instalaciones seguras y eficientes para su hogar o negocio.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Reparaciones</h3>
                <p className="text-gray-500">Soluciones rápidas y efectivas para cualquier problema eléctrico.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Mantenimiento</h3>
                <p className="text-gray-500">Servicios de mantenimiento preventivo para evitar futuros problemas.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Por Qué Elegirnos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <ThumbsUp className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Calidad Garantizada</h3>
                  <p className="text-gray-500">Nuestro trabajo está respaldado por una garantía de satisfacción.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Servicio 24/7</h3>
                  <p className="text-gray-500">Estamos disponibles las 24 horas para emergencias eléctricas.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Profesionales Certificados</h3>
                  <p className="text-gray-500">Nuestro equipo está compuesto por electricistas certificados y experimentados.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background text-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ¿Listo para mejorar su sistema eléctrico?
                </h2>
                <p className="mx-auto max-w-[600px] text-foreground md:text-xl">
                  Contáctenos hoy para un presupuesto gratuito y descubra cómo podemos ayudarle con sus necesidades eléctricas.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-input text-foreground" placeholder="Ingrese su correo" type="email" />
                  <Button className="bg-primary text-primary-foreground" type="submit">
                    Contactar
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 ElectricidadPro. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </a>
        </nav>
      </footer>
    </div>
  )
}