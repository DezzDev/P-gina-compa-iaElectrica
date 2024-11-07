import { client } from "@/sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { useEffect, useState } from "react"
import { type BlogPost } from "@/types/sanity"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Plus } from "lucide-react"

const { projectId, dataset } = client.config()

const urlFor = (source: SanityImageSource) => (
	projectId && dataset
		? imageUrlBuilder({ projectId, dataset }).image(source)
		: null
)


export default function BlogPage() {

	const [posts, setPosts] = useState<BlogPost[]>([])

	useEffect(() => {
		client.fetch<BlogPost[]>("*[_type == 'post']").then(data => {
			setPosts(data)
		})
	}, [])

	

	return (
		<>
			<section className="w-full pt-16 pb-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
				<div className="container px-4 md:px-6">
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
						Blog
					</h1>
					<p className="max-w-[700px] text-blue-100 md:text-xl">
						En CyDe estamos comprometidos con nuestros clientes, por ende hemos creado este espacio para compartir nuestras ideas con vosotros.
					</p>
				</div>
			</section>


			{/* posts */}
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container grid grid-cols-auto-fit-320 items-center justify-center gap-2">
					{posts.map(post => {
						const postImageUrl = post?.image
						? urlFor(post.image)?.url()
						: null

						console.log(postImageUrl)
						return (

							<Card key={post._id}>
								<CardHeader 
									className="aspect-video bg-cover bg-no-repeat h-40 w-80" 
									style={postImageUrl ? {backgroundImage: `url(${postImageUrl})`} : {backgroundImage: "url(/blogPost.webp)"}}
								>
								</CardHeader>
								<CardContent className="space-y-2 mt-2">
									<CardTitle>
										{post.title}
									</CardTitle>
									<CardDescription>
										{post.content.substring(0, 30)}
										{post.content.length >= 30 ? "..." : ""}
									</CardDescription>
								</CardContent>
								<CardFooter >
									<Link
										to={post.slug.current}
										className="flex gap-1 items-center text-tertiary"
									>
										Leer
										<Plus className="inline-block" size="18px" />
									</Link>
								</CardFooter>
							</Card>

						)
					})}
				</div>
			</section>
		</>
	)
}