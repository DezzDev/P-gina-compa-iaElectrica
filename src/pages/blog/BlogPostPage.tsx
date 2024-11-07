import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { client } from "@/sanity/client"
import { BlogPost } from "@/types/sanity"
import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
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

	useEffect(() => {
		const POST_QUERY = `*[_type == "post" && slug.current == "${id}"]`
		console.log(POST_QUERY)
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
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
						{post?.title}
					</h1>
					<Link to="/blog" className="text-tertiary flex gap-1">
						<ArrowLeftIcon className="inline-block"/> Volver
					</Link>
				</div>
			</section>

			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container max-w-[1024px]">
					<article>
						{postImageUrl &&

							<div
								className="h-[300px] sm:h-[400px] lg:h-[500px] max-w-[1024px] mx-auto bg-cover"
								style={{ backgroundImage: `url(${postImageUrl})` }}
							>
							</div>
						}

						<div className="py-12 md:py-24">
							{post && (
								<div>
									<p>{post.content}</p>

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