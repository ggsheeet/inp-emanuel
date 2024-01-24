import { createClient } from 'contentful'

const client = createClient({
	space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE}`,
	environment: `${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}`,
	accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
})

export const getBlogPosts = async () => {
	try {
		const res = await fetch(
			`https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}/entries?content_type=blogPost&access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
		)

		if (!res.ok) {
			throw new Error(`Failed to fetch blog posts: ${res.statusText}`)
		}

		const data = await res.json()
		return data.items
	} catch (error) {
		console.error('Error fetching blog posts:', error)
		return []
	}
}
