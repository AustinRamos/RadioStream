'use client'

import { useState } from 'react'
import { Plus, Radio } from 'lucide-react'
import { Stream } from '@/types/stream'
import { StreamCard } from './StreamCard'
import { StreamPlayer } from './StreamPlayer'
import { CreateStreamDialog } from '../dialog/CreateStreamDialog'

export function StreamingApp() {
  const [streams, setStreams] = useState<Stream[]>([
    { id: '1', title: 'Chill Beats', dj: 'DJ Mellow', listeners: 42, isLive: true },
    { id: '2', title: 'Deep House', dj: 'DJ Wave', listeners: 28, isLive: true },
    { id: '3', title: 'Jazz Cafe', dj: 'DJ Soul', listeners: 15, isLive: false },
  ]);

  const [selectedStream, setSelectedStream] = useState<Stream | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const handleStreamCreate = (streamData: { title: string; dj: string }) => {
    const newStream: Stream = {
      id: (streams.length + 1).toString(),
      ...streamData,
      listeners: 0,
      isLive: true,
    };
    setStreams([...streams, newStream]);
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <Radio size={32} className="text-purple-500" />
          <h1 className="text-2xl font-bold text-white">Radio Stream</h1>
        </div>
        <button 
          onClick={() => setIsCreateDialogOpen(true)}
          className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg transition-colors text-white"
        >
          <Plus size={20} />
          Create Stream
        </button>
      </header>

      {selectedStream && (
        <StreamPlayer 
          stream={selectedStream}
          isPlaying={isPlaying}
          onPlayPause={() => setIsPlaying(!isPlaying)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {streams.map((stream) => (
          <StreamCard
            key={stream.id}
            stream={stream}
            isSelected={selectedStream?.id === stream.id}
            onClick={setSelectedStream}
          />
        ))}
      </div>

      <CreateStreamDialog
        isOpen={isCreateDialogOpen}
        onClose={() => setIsCreateDialogOpen(false)}
        onSubmit={handleStreamCreate}
      />
    </div>
  );
}