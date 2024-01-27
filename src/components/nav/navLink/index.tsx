import React from 'react'
import Link from 'next/link'
import { LinkProps } from '@/types/Types'

export const NavLink: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <Link href={href} rel='noopener noreferrer'>
      {children}
    </Link>
  )
}
