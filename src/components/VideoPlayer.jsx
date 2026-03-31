import { useState } from 'react'
import { Play } from 'lucide-react'

export default function VideoPlayer({ vimeoId = '231071693' }) {
  const [isPlaying, setIsPlaying] = useState(false)

  if (isPlaying) {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="ITB-MED Patient Story"
        />
      </div>
    )
  }

  return (
    <button
      onClick={() => setIsPlaying(true)}
      className="group relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer bg-navy-900"
      aria-label="Play video about Jennifer Searl's transplant story"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 opacity-90" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-accent-500 flex items-center justify-center group-hover:bg-accent-400 transition-all duration-300 group-hover:scale-110 shadow-lg shadow-accent-500/30">
            <Play className="w-8 h-8 text-white ml-1" fill="white" />
          </div>
          <span className="text-white/80 text-sm font-medium tracking-wide uppercase">Watch Jennifer's Story</span>
        </div>
      </div>
    </button>
  )
}
