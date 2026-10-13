'use client'

import { clsx } from 'clsx'
import { Brand } from '~/components/ui/brand'
import { GrowingUnderline } from '~/components/ui/growing-underline'
import { Link } from '~/components/ui/link'
import { MusicWaves } from '~/components/ui/music-waves'
import { useNowPlaying } from '~/hooks/use-now-playing'
import { Image } from './image'

export function SpotifyNowPlaying({
  className,
  showCover,
  songEffect = 'none',
  isActive,
}: {
  className?: string
  showCover?: boolean
  songEffect?: 'none' | 'underline'
  isActive?: boolean
}) {
  let { isPlaying, songUrl, title, artist, album, albumImageUrl } = useNowPlaying()

  return (
    <div className={clsx(['flex items-center min-w-0', className])}>
      {isPlaying && showCover && albumImageUrl ? (
        <Image
          src={albumImageUrl}
          alt={title || 'Spotify track'}
          width={40}
          height={40}
          className={clsx(
            'h-5.5 w-5.5 shrink-0 animate-spin rounded-full border border-gray-300 [animation-duration:6s] dark:border-gray-700 transition-all duration-300',
            isActive && 'ring-2 ring-spotify/60 scale-105'
          )}
        />
      ) : (
        <Brand as="icon" name="Spotify" className={clsx('h-5.5 w-5.5 shrink-0 transition-transform duration-300', isActive && 'scale-110 text-spotify')} />
      )}
      <div className="ml-2.5 flex min-w-0 flex-1 items-center overflow-x-auto no-scrollbar">
        {isPlaying && songUrl ? (
          <div className="flex items-center whitespace-nowrap">
            <MusicWaves className={clsx('mr-2 shrink-0 transition-all duration-300', isActive && 'scale-110')} />
            <Link
              href={songUrl}
              className="inline-flex items-center whitespace-nowrap text-xs sm:text-sm font-medium transition-colors"
              title={`${title} - ${artist || ''}${album ? ` - Album: ${album}` : ''}`}
            >
              <span className="font-semibold text-[--song-color] whitespace-nowrap">
                {songEffect === 'underline' ? (
                  <GrowingUnderline data-umami-event="spotify-now-playing-view-song" className="whitespace-nowrap">
                    {title}
                  </GrowingUnderline>
                ) : (
                  <span data-umami-event="spotify-now-playing-view-song" className="whitespace-nowrap">{title}</span>
                )}
              </span>
              {artist && (
                <>
                  <span className="mx-1 sm:mx-1.5 text-[--artist-color] whitespace-nowrap">-</span>
                  <span className="text-[--artist-color] whitespace-nowrap">{artist}</span>
                </>
              )}
              {album && (
                <>
                  <span className="mx-1 sm:mx-1.5 text-[--artist-color] whitespace-nowrap">-</span>
                  <span className="text-[--artist-color] whitespace-nowrap">Album: {album}</span>
                </>
              )}
            </Link>
          </div>
        ) : (
          <div className="inline-flex items-center whitespace-nowrap text-xs sm:text-sm">
            <p className="font-medium text-[--song-color]">Not Playing</p>
            <span className="mx-1 sm:mx-1.5 text-[--artist-color]">-</span>
            <p className="text-[--artist-color]">Spotify</p>
          </div>
        )}
      </div>
    </div>
  )
}
