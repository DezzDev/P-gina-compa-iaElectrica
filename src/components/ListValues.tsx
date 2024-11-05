import { ReactNode } from "react"

type props = {
	title: string,
	description: string,
	icon: ReactNode
}


export function ListValues({ title, description, icon }: props) {
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