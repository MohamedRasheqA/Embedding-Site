// app/page.tsx
import { Card } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">Embedding - Prototype</h1>
        
        {/* Acolyte Health */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Acolyte Health</h2>
          <iframe 
            src="https://acolyte-health-staging.vercel.app/chat"
            className="w-full h-96 border-0 rounded-lg"
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
        </Card>

        {/* Medi-Bot - Increased height */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Medi-Bot</h2>
          <iframe 
            src="https://glp-1-typescript.vercel.app/"
            className="w-full h-[600px] border-0 rounded-lg" // Increased height from h-96 to h-[800px]
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
            title="Medi-Bot"
          />
        </Card>

        {/* Bents Assistant */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Bents Assistant</h2>
          <iframe 
            src="https://www.bentsassistant.com"
            className="w-full h-96 border-0 rounded-lg"
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
            title="Bents Assistant"
          />
        </Card>
      </div>
    </main>
  )
}