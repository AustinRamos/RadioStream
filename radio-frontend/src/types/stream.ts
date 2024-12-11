export interface Stream {
    id: string;
    title: string;
    dj: string;
    listeners: number;
    isLive: boolean;
  }
  
  export interface StreamCardProps {
    stream: Stream;
    isSelected: boolean;
    onClick: (stream: Stream) => void;
  }
  
  export interface StreamPlayerProps {
    stream: Stream;
    isPlaying: boolean;
    onPlayPause: () => void;
  }