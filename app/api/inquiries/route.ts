import { type NextRequest, NextResponse } from "next/server"

// In production, use a database like Supabase or Neon
const inquiries: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const inquiry = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      ...body,
    }

    inquiries.push(inquiry)
    console.log("[v0] New inquiry received:", inquiry)

    // TODO: In production, send email notification to hz202301043@wmsu.edu.ph
    // or store in database

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully",
        id: inquiry.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error processing inquiry:", error)
    return NextResponse.json({ success: false, message: "Error submitting inquiry" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    total: inquiries.length,
    inquiries,
  })
}
