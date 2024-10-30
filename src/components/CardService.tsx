import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ReactNode } from "react"

type props = {
	title: string,
	content: string,
	icon: ReactNode
}

export function CardService({icon,title,content}:props){
	return(
		<Card className="shadow-md hover:bg-primary/10">
			<CardHeader>
				<CardTitle className="flex items-center gap-5 justify-center">
					{icon}
					<h3 className="text-xl font-bold sm:text-2xl">{title}</h3>
				</CardTitle>
			</CardHeader>
			<CardContent>
				{content}
			</CardContent>
		</Card>
	)
}