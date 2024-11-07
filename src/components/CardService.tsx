import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ReactNode } from "react"

type props = {
	title: string,
	description: string,
	icon: ReactNode
}

export function CardService({icon,title,description}:props){
	return(
		<Card className="shadow-md hover:bg-primary/10">
			<CardHeader>
				<CardTitle className="flex items-center gap-5 justify-center text-xl font-bold lg:text-2xl">
					{icon}
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent className="sm:text-lg">
				{description}
			</CardContent>
		</Card>
	)
}