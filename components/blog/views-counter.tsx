'use client'

import { useEffect } from 'react'
import type { StatsType } from '~/db/schema'
import { useBlogStats, useUpdateBlogStats } from '~/hooks/use-blog-stats'

export function ViewsCounter({
  type,
  slug,
  className,
}: {
  type: StatsType
  slug: string
  className?: string
}) {
  let [stats, isLoading] = useBlogStats(type, slug)
  let updateView = useUpdateBlogStats()

  useEffect(() => {
    if (!isLoading && stats) {
      const lastViewed = localStorage.getItem(slug)
      const now = new Date()
      const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000)

      if (lastViewed) {
        const lastViewedDate = new Date(lastViewed)

        // Check if last viewed time was within the last 24 hours
        if (lastViewedDate > twentyFourHoursAgo) {
          return // Skip the view update
        }
      }

      // Update localStorage
      localStorage.setItem(slug, now.toISOString())
      updateView({ type: 'blog', slug, views: stats['views'] + 1 })
    }
  }, [stats, isLoading])

  return <span className={className}>{isLoading ? '...' : (stats['views'] || 0) + ' views'}</span>
}
