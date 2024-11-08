import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { client } from "@/sanity/client"
import { BlogPost } from "@/types/sanity"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { PortableText } from "@portabletext/react"
import { ArrowLeftIcon } from "lucide-react"

const { projectId, dataset } = client.config()

const urlFor = (source: SanityImageSource) => (
	projectId && dataset
		? imageUrlBuilder({ projectId, dataset }).image(source)
		: null
)

export default function BlogPostPage() {
	const { id } = useParams()
	const [post, setPost] = useState<BlogPost>()
	console.log(id)
	useEffect(() => {
		const POST_QUERY = `*[_type == "post" && slug.current == "${id}"]`
		
		client.fetch<BlogPost[]>(POST_QUERY).then(data => {

			setPost(data[0])
			
		})
	}, [])

	const postImageUrl = post?.image
		? urlFor(post.image)?.url()
		: null

	return (
		<div>
			<section className="w-full pt-16 pb-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
				<div className="container px-4 md:px-6 space-y-7">					
					<Link to="/blog" className="text-tertiary flex gap-1">
						<ArrowLeftIcon className="inline-block"/> Volver
					</Link>
				</div>
			</section>

			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container max-w-[1024px]">
					<article>
					<h1 className="text-3xl font-bold tracking-tighter text-center mb-12 sm:text-4xl lg:mb-16 lg:text-5xl">
						{post?.title}
					</h1>

						{postImageUrl &&

							<div
								className="aspect-video mx-auto bg-cover"
								style={{ backgroundImage: `url(${postImageUrl})` }}
							>
							</div>
						}

						<div className="py-12 md:py-24">
							{post && (
								<div>
									{
										Array.isArray(post.content) && 
										<PortableText 
											value={post.content} 
											components={{
												block: {
													// Personalizar el estilo de los encabezados
													h1: ({ children }) => <h1 className="text-2xl font-bold my-4">{children}</h1>,
													h2: ({ children }) => <h2 className="text-xl font-semibold my-4">{children}</h2>,
													h3: ({ children }) => <h2 className="text-lg font-semibold my-4">{children}</h2>,
													h4: ({ children }) => <h2 className="text-lg font-semibold my-4">{children}</h2>,
													normal: ({ children }) => <p className="my-4">{children}</p>,
												},
												list: {
													bullet: ({ children }) => <ul className="list-disc ml-6 space-y-2">{children}</ul>,
													number: ({ children }) => <ol className="list-decimal ml-6 space-y-3">{children}</ol>,
												},
												
											}}
										/>
									}

								</div>
							)}
						</div>
					</article>

				</div>
			</section>
			{/* className="w-full h-[300px] sm:h-[400px] lg:h-[500px] max-w-[1024px] mx-auto bg-cover bg-no-repeat" */}




		</div>
	)
}