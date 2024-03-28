import { ItemProps, AssetProps, AuthorProps } from '@/types/globalTypes'

export const getBlogPosts = async () => {
	try {
		const res = await fetch(
			`https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}/entries?content_type=blog&limit=3&access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
		)

		if (!res.ok) {
			throw new Error(`Failed to fetch blog posts: ${res.statusText}`)
		}

		const data = await res.json()
		const assetMap = new Map<string, AssetProps>(
			data.includes.Asset.map((asset: AssetProps) => [asset.sys.id, asset])
		)

		const authorMap = new Map<string, AuthorProps>(
			data.includes.Entry.map((author: AuthorProps) => [author.sys.id, author])
		)

		const mappedData = data.items.map((item: ItemProps) => {
			const { fields, sys } = item

			const thumbnailId = fields.thumbnail.sys.id
			const thumbnailAsset = assetMap.get(thumbnailId)

			let thumbnailInfo = {
				description: '',
				url: '',
				width: 0,
				height: 0
			}

			if (thumbnailAsset) {
				thumbnailInfo = {
					description: thumbnailAsset.fields.description,
					url: thumbnailAsset.fields.file.url,
					width: thumbnailAsset.fields.file.details.image.width,
					height: thumbnailAsset.fields.file.details.image.height
				}
			}

			const authorId = fields.author.sys.id
			const authorInfo = authorMap.get(authorId)

			let authorName = ''
			let authorImgInfo = {
				description: '',
				url: '',
				width: 0,
				height: 0
			}

			if (authorInfo) {
				authorName = authorInfo.fields.name

				const authorImgId = authorInfo.fields.face.sys.id
				const authorImg = assetMap.get(authorImgId)

				if (authorImg) {
					authorImgInfo = {
						description: authorImg.fields.description,
						url: authorImg.fields.file.url,
						width: authorImg.fields.file.details.image.width,
						height: authorImg.fields.file.details.image.height
					}
				}
			}

			const createdAt = new Date(sys.createdAt)

			const options: Intl.DateTimeFormatOptions = {
				month: 'long',
				day: 'numeric'
			}
			const dateFormat = new Intl.DateTimeFormat('es-ES', options)

			const formattedCreatedAt = dateFormat.format(createdAt)
			return {
				title: fields.title,
				description: fields.description,
				thumbnail: thumbnailInfo,
				createdAt: formattedCreatedAt,
				authorName: authorName,
				authorImg: authorImgInfo
			}
		})
		return mappedData
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

		const mappedData = data.items.map((item: ItemProps) => {
			const { fields } = item

			const thumbnailId = fields.thumbnail.sys.id
			const thumbnailAsset = assetMap.get(thumbnailId)

			let thumbnailInfo = {
				description: '',
				url: '',
				width: 0,
				height: 0
			}

			if (thumbnailAsset) {
				thumbnailInfo = {
					description: thumbnailAsset.fields.description,
					url: thumbnailAsset.fields.file.url,
					width: thumbnailAsset.fields.file.details.image.width,
					height: thumbnailAsset.fields.file.details.image.height
				}
			}

			const startDate = new Date(fields.startTime)
			const endDate = new Date(fields.endTime)

			const options: Intl.DateTimeFormatOptions = {
				month: 'long',
				day: 'numeric'
			}

			const dateFormat = new Intl.DateTimeFormat('es-ES', options)
			const timeFormat = new Intl.DateTimeFormat('es-ES', {
				hour: 'numeric',
				minute: 'numeric',
				hour12: true
			})

			const formattedStartDate = dateFormat.format(startDate)
			const formattedStartTime = timeFormat.format(startDate)
			const formattedEndDate = dateFormat.format(endDate)
			const formattedEndTime = timeFormat.format(endDate)

			return {
				title: fields.title,
				startDate: formattedStartDate,
				startTime: formattedStartTime,
				endDate: formattedEndDate,
				endTime: formattedEndTime,
				description: fields.description,
				location: fields.location,
				thumbnail: thumbnailInfo
			}
		})
		return mappedData
	} catch (error) {
		console.error('Error fetching events:', error)
		return []
	}
}
