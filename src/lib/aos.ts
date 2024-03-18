'use client'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const AOSProvider = () => {
	useEffect(() => {
		Aos.init({
			duration: 700,
			once: false,
			easing: 'ease-in-out',
			debounceDelay: 50
		})
		Aos.refresh()
	}, [])

	return null
}
