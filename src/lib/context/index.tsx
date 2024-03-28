'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { getEvents, getBlogPosts } from '../contentful'
import { DataContextProps } from '@/types/globalTypes'

const DataContext = createContext<DataContextProps>({
	blogPosts: [],
	events: [],
	loading: true
})

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
	const [loading, setLoading] = useState(true);
	const [blogPosts, setBlogPosts] = useState([])
	const [events, setEvents] = useState([])

	useEffect(() => {
		let isMounted = true

		const fetchData = async () => {
			try {
				const postsFetched = await getBlogPosts()
				const eventsFetched = await getEvents()

				if (isMounted) {
					setBlogPosts(postsFetched)
					setEvents(eventsFetched)
					setLoading(false);
					console.log('fetched')
				}
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}

		fetchData()

		return () => {
			isMounted = false
		}
	}, [])

	return (
		<DataContext.Provider value={{ blogPosts, events, loading }}>
			{children}
		</DataContext.Provider>
	)
}

export const useData = () => {
	const context = useContext(DataContext)
	if (!context) {
		throw new Error('useData must be used within a DataProvider')
	}
	return context
}
