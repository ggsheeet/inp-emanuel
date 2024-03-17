import { createClient } from 'contentful'
import { ItemProps, AssetProps } from '@/types/globalTypes'

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

export const getEvents = async () => {
	try {
		const res = await fetch(
			`https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}/entries?content_type=events&limit=3&order=-sys.createdAt&access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
		)

		if (!res.ok) {
			throw new Error(`Failed to fetch events: ${res.statusText}`)
		}

		const data = await res.json()
		const assetMap = new Map<string, AssetProps>(
			data.includes.Asset.map((asset: AssetProps) => [asset.sys.id, asset])
		)
	
		// Map items and their corresponding assets together
		const mappedData = data.items.map((item: ItemProps) => {
			const { fields } = item;
		
			const thumbnailId = fields.thumbnail.sys.id;
			const thumbnailAsset = assetMap.get(thumbnailId);
		
			// Extract thumbnail information
			const thumbnailInfo = thumbnailAsset
				? {
					description: thumbnailAsset.fields.description,
					url: thumbnailAsset.fields.file.url,
					width: thumbnailAsset.fields.file.details.image.width,
					height: thumbnailAsset.fields.file.details.image.height
				  }
				: null;
		
			const startDate = new Date(fields.startTime);
			const endDate = new Date(fields.endTime);
		
			const options: Intl.DateTimeFormatOptions = {
				month: 'long', // 'long' for full name (e.g., "abril")
				day: 'numeric',
			};
		
			const dateFormat = new Intl.DateTimeFormat('es-ES', options);
			const timeFormat = new Intl.DateTimeFormat('es-ES', { hour: 'numeric', minute: 'numeric', hour12: true });
		
			const formattedStartDate = dateFormat.format(startDate);
			const formattedStartTime = timeFormat.format(startDate);
			const formattedEndDate = dateFormat.format(endDate);
			const formattedEndTime = timeFormat.format(endDate);
		
			return {
				title: fields.title,
				startDate: formattedStartDate,
				startTime: formattedStartTime,
				endDate: formattedEndDate,
				endTime: formattedEndTime,
				description: fields.description,
				location: fields.location,
				thumbnail: thumbnailInfo
			};
		});
		return mappedData
	} catch (error) {
		console.error('Error fetching events:', error)
		return []
	}
}
