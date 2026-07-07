import { NextResponse } from "next/server";
import { list } from "@vercel/blob";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const key = process.env.BRIEFING_ADMIN_KEY;
  if (!body || !key || body.key !== key) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  if (body.action === "list") {
    const l = await list({ prefix: "briefings/" });
    const items = l.blobs
      .filter((b) => !b.pathname.includes("_teste"))
      .map((b) => ({ pathname: b.pathname, uploadedAt: b.uploadedAt, size: b.size }))
      .sort((a, b) => String(b.uploadedAt).localeCompare(String(a.uploadedAt)));
    return NextResponse.json({ ok: true, items });
  }

  if (body.action === "get" && typeof body.pathname === "string") {
    const l = await list({ prefix: body.pathname });
    const blob = l.blobs.find((b) => b.pathname === body.pathname);
    if (!blob) return NextResponse.json({ ok: false }, { status: 404 });
    const resp = await fetch(blob.url, {
      headers: { authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}` },
    });
    if (!resp.ok) return NextResponse.json({ ok: false }, { status: 502 });
    const data = await resp.json();
    return NextResponse.json({ ok: true, data });
  }

  return NextResponse.json({ ok: false, error: "action" }, { status: 400 });
}
