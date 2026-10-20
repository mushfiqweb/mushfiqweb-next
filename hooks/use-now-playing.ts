import useSWR from 'swr'
import type { SpotifyNowPlayingData } from '~/types/data'
import { fetcher } from '~/utils/misc'

export function useNowPlaying() {
  let { data } = useSWR<SpotifyNowPlayingData>('/api/spotify', fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: true,
    revalidateOnMount: true,
  })
  return data || { isPlaying: false }
}

