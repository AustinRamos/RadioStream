import { useState } from 'react'
import { X } from 'lucide-react'

interface CreateStreamDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (streamData: { title: string; dj: string }) => void;
}

export function CreateStreamDialog({ isOpen, onClose, onSubmit }: CreateStreamDialogProps) {
  const [title, setTitle] = useState('')
  const [dj, setDj] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ title, dj })
    setTitle('')
    setDj('')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Create New Stream</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-white">Stream Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
                placeholder="Enter stream title"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-white">DJ Name</label>
              <input
                type="text"
                value={dj}
                onChange={(e) => setDj(e.target.value)}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
                placeholder="Enter DJ name"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 py-2 rounded-lg transition-colors text-white"
            >
              Create Stream
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}