import { ItemProps, AssetProps, AuthorProps } from '@/types/globalTypes'

const fetchEntries = async (contentType: string, limit: number) => {
	try {
		const res = await fetch(
			`https://cdn.contentful.com/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE}/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}/entries?content_type=${contentType}&limit=${limit}&access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
		)

		if (!res.ok) {
			throw new Error(`Failed to fetch ${contentType}: ${res.statusText}`)
		}

		return await res.json();
	} catch (error) {
		console.error(`Error fetching ${contentType}:`, error)
		return [];
	}
}

const mapThumbnail = (thumbnailId: string, assetMap: Map<string, AssetProps>) => {
	const thumbnailAsset = assetMap.get(thumbnailId);
	return thumbnailAsset ? {
		description: thumbnailAsset.fields.description,
		url: thumbnailAsset.fields.file.url,
		width: thumbnailAsset.fields.file.details.image.width,
		height: thumbnailAsset.fields.file.details.image.height
	} : {
		description: '',
		url: '',
		width: 0,
		height: 0
	};
}

const mapAuthor = (authorId: string, authorMap: Map<string, AuthorProps>, assetMap: Map<string, AssetProps>) => {
	const authorInfo = authorMap.get(authorId);
	if (!authorInfo) return { authorName: '', authorImgInfo: { description: '', url: '', width: 0, height: 0 } };

	const { name, face } = authorInfo.fields;
	const authorImgId = face.sys.id;
	const authorImg = assetMap.get(authorImgId);

	const authorName = name;
	const authorImgInfo = authorImg ? {
		description: authorImg.fields.description,
		url: authorImg.fields.file.url,
		width: authorImg.fields.file.details.image.width,
		height: authorImg.fields.file.details.image.height
	} : { description: '', url: '', width: 0, height: 0 };

	return { authorName, authorImgInfo };
}

export const getBlogPosts = async () => {
	try {
		const data = await fetchEntries('blog', 3);
		const assetMap = new Map<string, AssetProps>(data.includes.Asset.map((asset: AssetProps) => [asset.sys.id, asset]));
		const authorMap = new Map<string, AuthorProps>(data.includes.Entry.map((author: AuthorProps) => [author.sys.id, author]));

		return data.items.map((item: ItemProps) => {
			const { fields, sys } = item;
			const { thumbnail, author } = fields;
			const { createdAt } = sys;

			const thumbnailInfo = mapThumbnail(thumbnail.sys.id, assetMap);
			const { authorName, authorImgInfo } = mapAuthor(author.sys.id, authorMap, assetMap);

			const formattedCreatedAt = new Intl.DateTimeFormat('es-ES', { month: 'long', day: 'numeric' }).format(new Date(createdAt));

			return {
				title: fields.title,
				description: fields.description,
				thumbnail: thumbnailInfo,
				createdAt: formattedCreatedAt,
				authorName,
				authorImg: authorImgInfo
			};
		});
	} catch (error) {
		console.error('Error fetching blog posts:', error);
		return [];
	}
}

export const getEvents = async () => {
	try {
		const data = await fetchEntries('events', 3);
		const assetMap = new Map<string, AssetProps>(data.includes.Asset.map((asset: AssetProps) => [asset.sys.id, asset]));

		return data.items.map((item: ItemProps) => {
			const { fields } = item;
			const { thumbnail, startTime, endTime } = fields;

			const thumbnailInfo = mapThumbnail(thumbnail.sys.id, assetMap);

			const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
			const dateFormat = new Intl.DateTimeFormat('es-ES', options);
			const timeFormat = new Intl.DateTimeFormat('es-ES', { hour: 'numeric', minute: 'numeric', hour12: true });

			const startDate = new Date(startTime);
			const endDate = new Date(endTime);
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
	} catch (error) {
		console.error('Error fetching events:', error);
		return [];
	}
}
