"use client";

import { useState } from "react";
import Link from "next/link";

export default function MembershipPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      const raw = await res.text(); // read once
      let data: any = null;
      try {
        data = raw ? JSON.parse(raw) : null;
      } catch {
        data = null;
      }

      if (!res.ok) {
        const msg =
          data?.error ||
          data?.message ||
          (raw && raw.length < 200 ? raw : null) ||
          `Registration failed (HTTP ${res.status})`;

        setError(msg);
        return;
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err?.message ?? "Network error");
    } finally {
      setLoading(false);
    }
  }


  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-extrabold">Membership Registration</h1>
      <p className="mt-3 opacity-80">
        Create an account to access member resources, CPD, and events.
      </p>

      {success ? (
        <div className="mt-8 rounded-2xl border border-brand-600 p-6">
          <h2 className="text-xl font-bold">Registration successful ✅</h2>
          <p className="mt-2 opacity-80">
            Your account has been created.
          </p>
          <div className="mt-4">
            <Link href="/members/login" className="btn-primary">
              Continue to login
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label className="text-sm font-semibold">Full name</label>
            <input
              className="mt-1 w-full rounded-md border px-3 py-2"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Password</label>
            <input
              type="password"
              className="mt-1 w-full rounded-md border px-3 py-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
            <div className="mt-1 text-xs opacity-70">
              Minimum 8 characters
            </div>
          </div>

          <button className="btn-primary" disabled={loading}>
            {loading ? "Registering…" : "Register"}
          </button>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <div className="text-sm opacity-80">
            Already have an account?{" "}
            <Link href="/members/login" className="hover:underline">
              Login
            </Link>
          </div>
        </form>
      )}
    </main>
  );
}
