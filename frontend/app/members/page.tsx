import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";
import { headers } from "next/headers";


export default async function MembersHome() {
  const user = await getCurrentUser();
  if (!user) redirect("/members/login");

  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-extrabold">Members Area</h1>
      <p className="mt-3 opacity-80">Welcome, {user.fullName}.</p>

      <div className="mt-8 rounded-2xl border p-6">
        <div className="font-semibold">Member dashboard (demo)</div>
        <div className="mt-2 text-sm opacity-80">
          This page is protected by a session cookie + DB session record.
        </div>

        <form
          action={async () => {
            "use server";

            const h = await headers();
            const host = h.get("host");

            // Fallback: if host missing, just redirect
            if (!host) {
              redirect("/members/login");
            }

            const proto = host.includes("localhost") ? "http" : "https";
            await fetch(`${proto}://${host}/api/auth/logout`, { method: "POST" });

            redirect("/members/login");
          }}
          className="mt-6"
        >
          <button className="btn-outline">Log out</button>
        </form>

      </div>
    </main>
  );
}

