import React from 'react'
import Link from 'next/link'
import { NavLinkProps } from '@/types/globalTypes'

export const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} rel='noopener noreferrer'>
      {children}
    </Link>
  )
}
