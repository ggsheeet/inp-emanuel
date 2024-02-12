export type NavLinkProps = {
	href: string
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