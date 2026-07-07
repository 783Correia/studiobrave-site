import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body.code !== "string" || typeof body.answers !== "object") {
    return NextResponse.json({ ok: false, error: "payload" }, { status: 400 });
  }

  const codes = (process.env.BRIEFING_CODES ?? "")
    .split(",")
    .map((c) => c.trim().toUpperCase())
    .filter(Boolean);
  const code = body.code.trim().toUpperCase();
  if (!codes.includes(code)) {
    return NextResponse.json({ ok: false, error: "code" }, { status: 401 });
  }

  const ts = new Date().toISOString().replace(/[:.]/g, "-");
  const pathname = `briefings/${code}/${ts}.json`;
  await put(
    pathname,
    JSON.stringify({ code, submittedAt: new Date().toISOString(), answers: body.answers }, null, 2),
    { access: "private", contentType: "application/json", addRandomSuffix: false }
  );

  return NextResponse.json({ ok: true });
}
