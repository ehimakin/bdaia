import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";

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
            // simple server action logout:
            const res = await fetch(`${process.env.APP_URL}/api/auth/logout`, { method: "POST" });
            void res;
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

