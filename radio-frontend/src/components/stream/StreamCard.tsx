import { Users } from 'lucide-react';
import { StreamCardProps } from '@/types/stream';

export function StreamCard({ stream, isSelected, onClick }: StreamCardProps) {
  return (
    <div 
      onClick={() => onClick(stream)}
      className={`
        p-4 rounded-lg cursor-pointer transition-all
        ${isSelected ? 'bg-purple-500' : 'bg-gray-800 hover:bg-gray-700'}
      `}
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-bold">{stream.title}</h3>
          <p className="text-gray-400 text-sm">{stream.dj}</p>
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Users size={16} />
          {stream.listeners}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className={`
          px-2 py-1 rounded-full text-xs
          ${stream.isLive ? 'bg-green-500/20 text-green-500' : 'bg-gray-500/20 text-gray-400'}
        `}>
          {stream.isLive ? 'LIVE' : 'OFFLINE'}
        </span>
      </div>
    </div>
  );
}