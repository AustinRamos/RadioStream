'use client'

import { Play, Pause } from 'lucide-react'
import { StreamPlayerProps } from '@/types/stream'

export function StreamPlayer({ stream, isPlaying, onPlayPause }: StreamPlayerProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">{stream.title}</h2>
          <p className="text-gray-400">{stream.dj}</p>
        </div>
        <button 
          onClick={onPlayPause}
          className="bg-purple-500 hover:bg-purple-600 p-3 rounded-full transition-colors"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
      </div>
      <div className="mt-4">
        <audio 
          controls 
          className="w-full" 
          src="http://localhost:8080/stream"
        >
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  )
}