'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useData } from '@/lib/context'
import { MappedItemProps } from '@/types/globalTypes'
import styles from './BannerContentful.module.css'

export const BannerContentful = ({ type }: { type: string }) => {
	const { events, blogPosts, loading } = useData()

	const data = type === 'events' ? events : blogPosts

	const [currentIndex, setCurrentIndex] = useState(0)
	const [numPages, setNumPages] = useState(0)
	const [startX, setStartX] = useState(0)

	const itemsPerPage = {
		desktop: 3,
		tablet: 2,
		mobile: 1
	}

	const handleDotClick = (index: number) => {
		setCurrentIndex(index)
	}

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		setStartX(e.touches[0].clientX)
	}

	const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
		const endX = e.changedTouches[0].clientX
		const deltaX = startX - endX
		const threshold = 70
		if (deltaX > threshold && currentIndex < numPages - 1) {
			setCurrentIndex((prevIndex) => prevIndex + 1)
		} else if (deltaX < -threshold && currentIndex > 0) {
			setCurrentIndex((prevIndex) => prevIndex - 1)
		}
	}

	const getViewport = (width: number) => {
		if (width >= 1280) {
			return 'desktop'
		} else if (width >= 768) {
			return 'tablet'
		} else {
			return 'mobile'
		}
	}

	const calculatePages = () => {
		const screenWidth = window.innerWidth
		const pages = Math.ceil(
			(data?.length || 0) / itemsPerPage[getViewport(screenWidth)]
		)
		setNumPages(pages)
	}

	useEffect(() => {
		calculatePages()

		let timeoutId: number
		const handleResize = () => {
			clearTimeout(timeoutId)
			timeoutId = window.setTimeout(() => {
				calculatePages()
				if (currentIndex <= numPages) {
					setCurrentIndex(0)
				}
			}, 1000)
		}
		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [data])

	const eventDateTime = (item: MappedItemProps) => {
		if (item.startDate === item.endDate && item.startTime === item.endTime) {
			return (
				<>
					<div className={styles.event_day}>
						<p className='w-full'>{item.startDate}</p>
					</div>
					<div className={styles.event_time}>
						<p className='w-full'>{item.startTime}</p>
					</div>
				</>
			)
		} else if (
			item.startDate === item.endDate &&
			item.startTime !== item.endTime
		) {
			return (
				<>
					<div className={styles.event_day}>
						<p className='w-full'>{item.startDate}</p>
					</div>
					<div className={styles.event_time}>
						<p className='w-[30%] md:w-1/3'>{item.startTime}</p>
						{' — '}
						<p className='w-[30%] md:w-1/3'>{item.endTime}</p>
					</div>
				</>
			)
		} else if (item.startDate !== item.endDate) {
			return (
				<>
					<div className={styles.event_day}>
						<p className='w-1/3'>{item.startDate}</p>
						{' ＿ '}
						<p className='w-1/3'>{item.endDate}</p>
					</div>
					<div className={styles.event_time}>
						<p className='w-[40%] md:w-[43%]'>{item.startTime}</p>
						{'  '}
						<p className='w-[40%] md:w-[41%]'>{item.endTime}</p>
					</div>
				</>
			)
		} else {
			return (
				<>
					<p>{item.startTime}</p>
				</>
			)
		}
	}

	return (
		<>
			<div className={styles.banner_title}>
				<h3>{type === 'events' ? 'Eventos' : 'Blog'}</h3>
				<button>
					Ver todos <i className={styles.arrow} />
				</button>
			</div>
			<div className={styles.banner_content}>
				<div className={styles.banner_slider}>
					{loading ? (
						<>
							{[...Array(3)].map((_, index) => (
								<div
									key={index}
									className={`${styles.content_card} ${styles.loading}`}
								></div>
							))}
						</>
					) : (
						<>
							{data?.map((item: MappedItemProps, index: number) => (
								<React.Fragment key={index}>
									<div
										onTouchStart={handleTouchStart}
										onTouchEnd={handleTouchEnd}
										className={styles.content_card}
										style={{
											transform: `translateX(-${currentIndex * 109.5}%)`
										}}
									>
										{type === 'events' ? (
											<div className={styles.event_text}>
												<p className={styles.event_title}>{item.title}</p>
												<div className={styles.event_date}>
													{eventDateTime(item)}
												</div>
											</div>
										) : (
											<div className={styles.post_text}>
												<p className={styles.post_title}>{item.title}</p>
												<div className={styles.post_author}>
													<Image
														src={`https:${item.authorImg?.url}`}
														alt={`${item.authorImg?.description}`}
														width={item.authorImg?.width}
														height={item.authorImg?.height}
														className={styles.author_img}
													/>
													<p className={styles.author_name}>
														{item.authorName}
													</p>
												</div>
											</div>
										)}
										{item.thumbnail && (
											<>
												<Image
													src={`https:${item.thumbnail.url}`}
													alt={item.thumbnail.description}
													width={item.thumbnail.width}
													height={item.thumbnail.height}
													className={styles.content_thumbnail}
												/>
												<div className={styles.content_overlay} />
											</>
										)}
									</div>
								</React.Fragment>
							))}
						</>
					)}
				</div>
				<div className={styles.dots}>
					{numPages > 1 && (
						<>
							{[...Array(numPages)].map((_, index) => (
								<span
									key={index}
									className={`${styles.dot} ${
										index === currentIndex ? styles.active_dot : ''
									}`}
									onClick={() => handleDotClick(index)}
								/>
							))}
						</>
					)}
				</div>
			</div>
		</>
	)
}
