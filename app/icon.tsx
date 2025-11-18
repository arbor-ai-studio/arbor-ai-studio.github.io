import fs from "node:fs";
import path from "node:path";

import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#f0f0f0',
          borderRadius: '6px',
        }}
      >
        <img
          src={`data:image/png;base64,${await getBase64Logo()}`}
          alt="Arbor AI Studio"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: '6px',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}

async function getBase64Logo() {
  const logoPath = path.join(process.cwd(), "public", "logo.png");
  const logoBuffer = fs.readFileSync(logoPath);
  return logoBuffer.toString("base64");
}
