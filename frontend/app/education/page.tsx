import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";
import EducationClient from "./EducationClient";

export default async function Page() {
  const user = await getCurrentUser();
  const isMember = Boolean(user);

  const courses = await prisma.course.findMany({
    where: { isPublished: true },
    orderBy: { title: "asc" },
    include: { resources: true },
  });

  // Demo CPD overview (we’ll replace with real CPD table later)
  const cpdOverview = isMember
    ? {
        year: new Date().getFullYear(),
        hoursCompleted: 6,
        hoursTarget: 10,
        lastCourse: courses[0]?.title ?? "—",
      }
    : null;

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-extrabold">CPD &amp; Education</h1>
      <p className="mt-4 opacity-85">
        Browse courses A–Z and preview details. Members see their CPD overview.
      </p>

      <div className="mt-8">
        <EducationClient
          isMember={isMember}
          userName={user?.fullName ?? null}
          cpdOverview={cpdOverview}
          courses={courses}
        />
      </div>
    </main>
  );
}
