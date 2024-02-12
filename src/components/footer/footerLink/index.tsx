import React from 'react'
import Link from 'next/link'
import { FooterLinkProps } from '@/types/globalTypes'

const FooterLink: React.FC<FooterLinkProps> = ({children, href, className = ''}) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</Link>
  )
}

export default FooterLink