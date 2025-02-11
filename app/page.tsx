// app/page.tsx
import { Card } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">External Content Demo</h1>
        
        {/* Method 1: Using iframe with sandbox */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Secure iframe Implementation</h2>
          <iframe 
            src="https://acolyte-health-staging.vercel.app/"
            className="w-full h-96 border-0 rounded-lg"
            sandbox="allow-scripts allow-same-origin"
            title="External Content"
          />
        </Card>

        {/* Method 2: Using Next.js Image component for media */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Secure iframe Implementation</h2>
          <iframe 
            src="https://glp-1-typescript.vercel.app/"
            className="w-full h-96 border-0 rounded-lg"
            sandbox="allow-scripts allow-same-origin"
            title="External Content"
          />
        </Card>

        {/* Method 3: Using a custom embed component */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Secure iframe Implementation</h2>
          <iframe 
            src="https://bents-v3.vercel.app"
            className="w-full h-96 border-0 rounded-lg"
            sandbox="allow-scripts allow-same-origin"
            title="External Content"
          />
        </Card>
      </div>
    </main>
  )
}
