// app/page.tsx
'use client'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Minus, Maximize2, X } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false)

  if (!isOpen) {
    return (
      <Button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700"
      >
        Chat with us
      </Button>
    )
  }

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="fixed bottom-4 right-4 z-50 w-96">
        <Card className="shadow-lg">
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
            isMinimized ? 'h-0' : 'h-[300px]'
          } overflow-hidden`}>
            <iframe 
              src="https://acolyte-health-staging.vercel.app/chat"
              className="w-full h-[300px] border-0 rounded-b-lg"
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