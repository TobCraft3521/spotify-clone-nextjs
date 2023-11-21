"use client"

import useGetSongByID from "@/hooks/useGetSongById"
import useLoadSongUrl from "@/hooks/useLoadSongUrl"
import usePlayer from "@/hooks/usePlayer"
import PlayerContent from "./PlayerContent"

const Player = () => {
  const player = usePlayer()
  const { song } = useGetSongByID(player.activeId)

  const songUrl = useLoadSongUrl(song!)

  if (!song || !songUrl || !player.activeId) return null
  return (
    <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
      <PlayerContent song={song} songUrl={songUrl} key={songUrl}/>
    </div>
  )
}

export default Player
