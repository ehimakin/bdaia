import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { sha256 } from "@/lib/auth";
import { SESSION_COOKIE_NAME } from "@/lib/session";

export async function POST() {
  // cookies() is sync in Next
  const cookieStore = cookies();
  const raw = cookieStore.get(SESSION_COOKIE_NAME)?.value;

  // Always clear cookie in the response
  const res = NextResponse.json({ ok: true });
  res.cookies.set(SESSION_COOKIE_NAME, "", {
    path: "/",
    expires: new Date(0),
    httpOnly: true,
    sameSite: "lax",
    secure: true, // ok on https prod; if local dev breaks, make this conditional
  });

  // Best-effort DB cleanup (never crash logout)
  try {
    if (raw) {
      const tokenHash = sha256(raw);
      await prisma.session.deleteMany({ where: { tokenHash } });
    }
  } catch (err) {
    console.error("Logout cleanup failed:", err);
    // Don't fail logout for DB issues
  }

  return res;
}
