import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ mode: "demo", count: 24, message: "Synthetic FINSHIELD case catalogue" });
}

export async function POST(request: Request) {
  const payload = await request.json();
  return NextResponse.json({ ok: true, id: payload.id ?? `CC-${Date.now().toString().slice(-4)}` }, { status: 201 });
}
