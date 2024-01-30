export type LinkProps = {
	href: string
	children: React.ReactNode
}

export type DrawerProps = {
	isOpen: boolean
	toggleDrawer: () => void
}