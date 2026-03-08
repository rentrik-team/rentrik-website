import { NextResponse } from "next/server";

/**
 * Health check endpoint for ALB, ECS, and Docker healthchecks.
 * Returns 200 OK when the app is running.
 */
export async function GET() {
  return NextResponse.json({ status: "ok", timestamp: new Date().toISOString() });
}
