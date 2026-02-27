import { prisma } from "@/lib/prisma";

export default async function Page() {
  const courses = await prisma.course.findMany({
    where: { isPublished: true },
    orderBy: { title: "asc" },
    include: { resources: true },
  });

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-extrabold">Education</h1>
      <p className="mt-4 opacity-85">
        Courses are now being loaded from the database.
      </p>

      <div className="mt-8 rounded-2xl border p-6">
        <div className="text-sm font-semibold opacity-70">Published courses</div>

        {courses.length === 0 ? (
          <div className="mt-3 text-sm opacity-80">No courses found.</div>
        ) : (
          <ul className="mt-4 space-y-3">
            {courses.map((c) => (
              <li key={c.id} className="rounded-xl border p-4">
                <div className="text-lg font-bold">{c.title}</div>
                <div className="mt-1 text-sm opacity-80">{c.summary}</div>
                <div className="mt-3 text-xs opacity-70">
                  {c.cpdHours} hr • {c.level} • {c.tags?.join(", ") || "No tags"}
                </div>

                {c.resources?.length > 0 && (
                  <div className="mt-3 text-xs opacity-70">
                    Resources: {c.resources.length}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
