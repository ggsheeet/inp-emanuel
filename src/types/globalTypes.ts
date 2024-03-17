export type NavLinkProps = {
	href: string
	className?: string | undefined
	children: React.ReactNode
}

export type DrawerProps = {
	isOpen: boolean
	toggleDrawer: () => void
}

export type WrapperProps = {
	children: React.ReactNode
}

export type FooterLinkProps = {
	href: string
	children: React.ReactNode
	className?: string | undefined
}

export type ItemProps = {
	fields: {
		title: string
		startTime: string
		description: string
		endTime: string
		location: string
		thumbnail: {
			sys: {
				id: string
			}
		}
	}
}

export type AssetProps = {
	sys: {
		id: string
	}
	fields: {
		description: string
		file: {
			url: string
			details: {
				image: {
					width: number
					height: number
				}
			}
		}
	}
}

export type MappedItemProps = {
	title: string
	description: string
	startDate: string
	startTime: string
	endDate: string
	endTime: string
	location: string
	thumbnail: {
        description: string;
        url: string;
        width: number;
        height: number;
    } | null;
}
