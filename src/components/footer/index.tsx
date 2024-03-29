import Link from 'next/link'
import FooterLink from './footerLink'
import { FacebookSvg, InstaSvg } from '@/svg'
import styles from './Footer.module.css'
import { menuLinks } from '@/lib/mappedObjects'

export const Footer = () => {
	return (
		<div className={styles.footer_container}>
			<div className={styles.footer_content}>
				<div className={styles.footer_separation}>
					<div className={styles.footer_section}>
						<h5 className={styles.footer_headers}>Ubicación</h5>
						<FooterLink
							href='https://goo.gl/maps/14J8UrAggB7BTQy27'
							className={styles.footer_info}
						>
							Monterrey, Nuevo León
						</FooterLink>
						<FooterLink
							href='https://goo.gl/maps/14J8UrAggB7BTQy27'
							className={styles.footer_info}
						>
							Av Insurgentes 450, San Jerónimo, 64630
						</FooterLink>
					</div>
					<div className={styles.footer_section}>
						<h5 className={styles.footer_headers}>Contáctanos</h5>
						<div className={styles.footer_contact}>
							<Link href='tel:'>8112-34-5678</Link>
						</div>
						<div className={styles.footer_contact}>
							<Link href='mailto:info@inpemanuel.com.mx'>
								info@inpemanuel.com.mx
							</Link>
						</div>
					</div>
					<div className={styles.footer_section}>
						<h5 className={styles.footer_headers}>Síguenos</h5>
						<div className={styles.footer_social}>
							<FooterLink href='https://www.instagram.com/inpemanuelmty/'>
								<InstaSvg />
							</FooterLink>
							<FooterLink href='https://www.facebook.com/inpemanuelmty'>
								<FacebookSvg />
							</FooterLink>
						</div>
					</div>
				</div>
				<div className={styles.footer_links}>
					{menuLinks.map((link, index) => (
						<FooterLink
							key={index}
							href={link.href}
						>
							{link.name}
						</FooterLink>
					))}
				</div>
				<div className={styles.footer_copyright}>
					<p>Iglesia Nacional Presbiteriana Emanuel. All Rights Reserved</p>
					<div>
						<FooterLink href=''>Aviso de Privacidad</FooterLink>
					</div>
				</div>
			</div>
		</div>
	)
}
