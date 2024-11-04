import { Separator } from "@/components/Separator"
import { Services } from "@/components/sections/Services"
import { Hero } from "@/components/sections/Hero"
import { ChooseUs } from "@/components/sections/ChooseUs"
import { Contact } from "@/components/sections/Contact"

export default function Component() {

	return (
		<>
			{/* hero */}
			<Hero />

			{/* services */}

			<Services />

			{/* separator */}

			<Separator />
			
			{/* why choose us */}
			<ChooseUs />

			{/* contact  */}
			<Contact bgSection="bg-primary" textSection="text-primary-foreground"/>

		</>
	)
}