import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { code } = await req.json().catch(() => ({}));
  const codes = (process.env.BRIEFING_CODES ?? "")
    .split(",")
    .map((c) => c.trim().toUpperCase())
    .filter(Boolean);

  if (typeof code === "string" && codes.includes(code.trim().toUpperCase())) {
    return NextResponse.json({ ok: true });
  }
  return NextResponse.json({ ok: false }, { status: 401 });
}
