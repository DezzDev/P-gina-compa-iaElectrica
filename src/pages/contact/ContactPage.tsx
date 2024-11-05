import companyData from "@/data/company.json"
import { Contact } from "@/components/sections/Contact"


function ContactPage() {

	
	return (
		 <div className="flex-1">
        <section className="w-full pt-16 pb-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
              Contacta con {companyData.name}
            </h1>
            <p className="max-w-[700px] text-blue-100 md:text-xl">
              Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros para cualquier consulta o servicio que necesites.
            </p>
          </div>
        </section>

				{/* <section className="w-full py-6 md:py-12 lg:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Horario de Atención
            </h2>
            <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl mb-8">
              Lunes a Viernes: 9:00 AM - 6:00 PM<br />
              Sábados: 10:00 AM - 2:00 PM<br />
              Domingos: Cerrado
            </p>
           
          </div>
        </section> */}
        
        <section className="w-full ">
         <Contact />

        </section>

				

      </div>
	)
}

export default ContactPage