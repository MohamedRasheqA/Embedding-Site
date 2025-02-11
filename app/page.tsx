// app/page.tsx
'use client'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Minus, Maximize2, X, MessageCircle } from 'lucide-react' // Added MessageCircle icon
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  if (!isOpen) {
    return (
      <Button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 rounded-full p-4 h-14 w-14" // Adjusted to circular button
      >
        <MessageCircle className="h-6 w-6" /> {/* Icon instead of text */}
      </Button>
    )
  }

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="fixed bottom-6 right-6 z-50 w-80"> {/* Adjusted position and reduced width */}
        <Card className="shadow-xl">
          <div className="flex items-center justify-between p-3 bg-blue-600 text-white rounded-t-lg">
            <h2 className="text-sm font-semibold">Acolyte Health Support</h2>
            <div className="flex gap-2">
              <button 
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-blue-700 rounded"
              >
                {isMinimized ? <Maximize2 size={16} /> : <Minus size={16} />}
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-blue-700 rounded"
              >
                <X size={16} />
              </button>
            </div>
          </div>
          
          <div className={`transition-all duration-300 ease-in-out ${
            isMinimized ? 'h-0' : 'h-[450px]'
          } overflow-hidden`}>
            <iframe 
              src="https://acolyte-health-staging.vercel.app/chat"
              className="w-full h-[450px] border-0 rounded-b-lg" // Increased height
              sandbox="
                allow-scripts 
                allow-same-origin 
                allow-forms 
                allow-popups 
                allow-modals 
                allow-downloads
                allow-popups-to-escape-sandbox
                allow-top-navigation
                allow-top-navigation-by-user-activation
              "
              allow="
                microphone;
                camera;
                clipboard-write;
                clipboard-read;
                autoplay;
                accelerometer;
                encrypted-media;
                geolocation
              "
              title="Acolyte Health"
            />
          </div>
        </Card>
      </div>
    </main>
  )
}