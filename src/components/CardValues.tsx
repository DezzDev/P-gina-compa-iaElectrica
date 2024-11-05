import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ReactNode } from "react"

type props = {
	title: string,
	description: string,
	icon: ReactNode
}

export function CardValues({ title, description, icon }: props) {
	return (
		<Card className="shadow-md hover:bg-primary/10">
			<CardHeader>
				<CardTitle className="flex items-center gap-5 justify-center">
					{icon}
					<span className="text-xl font-bold sm:text-2xl">{title}</span>
				</CardTitle>
			</CardHeader>
			<CardContent>
				{description}
			</CardContent>
		</Card>
	)

}

export function ListValues({ title, description, icon }: { title: string, description: string, icon: ReactNode }) {
	return (

		<div className="flex gap-x-4">
			{icon}
			<div>
				<h3 className="text-xl font-bold mb-2">{title}</h3>
				<p>{description}</p>				

			</div>
		</div>

	)
}