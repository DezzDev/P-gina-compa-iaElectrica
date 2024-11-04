import companyData from "@/data/company.json"

export function Separator (){
	return (
		<section className="h-52">			
					
					<div className="h-full bg-primary text-primary-foreground skew-y-3 flex flex-col justify-center items-center gap-2">
						<p className="text-5xl text-center">
							Solicita más información
						</p>
						<p className="text-2xl text-center"><b>Llámanos</b> sin compromiso: <a className="text-tertiary" href={`tel:${companyData.tel}`}><span className="underline">{companyData.tel}</span></a></p>

					</div>
			</section>

	)
}