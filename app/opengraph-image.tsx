import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
 
// Route segment config
// export const runtime = 'edge'
 
// Image metadata
export const alt = 'Arbor AI Studio | Agentic AI Solutions'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: 'linear-gradient(to bottom right, #000000, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          {/* Logo Placeholder - simplified for code generation */}
          <div
            style={{
              width: 100,
              height: 100,
              background: '#fff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 20,
            }}
          >
             <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
          <h1
            style={{
              fontSize: 60,
              fontWeight: 800,
              color: 'white',
              margin: 0,
            }}
          >
            Arbor AI Studio
          </h1>
        </div>
        <div
          style={{
            fontSize: 32,
            color: '#a1a1aa',
            textAlign: 'center',
            maxWidth: '80%',
            lineHeight: 1.4,
          }}
        >
          Agentic AI Solutions & SaaS Product Engineering
        </div>
        <div
          style={{
            marginTop: 60,
            padding: '12px 32px',
            background: 'linear-gradient(90deg, #00f2fe 0%, #4facfe 100%)',
            borderRadius: 50,
            fontSize: 24,
            fontWeight: 600,
            color: 'white',
          }}
        >
          Autonomous Digital Employees
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
