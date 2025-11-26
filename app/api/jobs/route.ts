import { NextResponse } from "next/server";

const JOBS_ENDPOINT = "https://cover-gen-user-data.vercel.app/api/jobs";

export async function GET() {
  try {
    const response = await fetch(JOBS_ENDPOINT, {
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Failed to fetch jobs" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch jobs" },
      { status: 502 }
    );
  }
}
