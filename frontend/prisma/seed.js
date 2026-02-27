const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // 1) Medico-legal course (from dev)
  await prisma.course.upsert({
    where: { slug: "medico-legal-reporting" },
    update: {
      isPublished: true,
    },
    create: {
      slug: "medico-legal-reporting",
      title: "Medico-Legal Reporting for Dentists",
      summary:
        "Write clearer reports with defensible reasoning and documentation standards.",
      cpdHours: 2,
      level: "Intermediate",
      tags: ["Medico-legal", "Reporting"],
      isPublished: true,
      resources: {
        create: [
          {
            title: "Course handbook (PDF)",
            kind: "pdf",
            storageKey: "courses/medico-legal-reporting/handbook.pdf",
            mimeType: "application/pdf",
            isMembersOnly: true,
          },
        ],
      },
    },
  });

  // 2) Your new course
  await prisma.course.upsert({
    where: { slug: "orthodontic-aligner-biomechanics" },
    update: {
      isPublished: true,
    },
    create: {
      slug: "orthodontic-aligner-biomechanics",
      title: "Orthodontic Aligner Biomechanics",
      summary:
        "Understand force systems, attachment design, and predictability in clear aligner therapy.",
      cpdHours: 2,
      level: "Intermediate",
      tags: ["Orthodontic", "Aligners"],
      isPublished: true,
      resources: {
        create: [
          {
            title: "Course handbook (PDF)",
            kind: "pdf",
            storageKey: "courses/orthodontic-aligner-biomechanics/handbook.pdf",
            mimeType: "application/pdf",
            isMembersOnly: true,
          },
        ],
      },
    },
  });

  console.log("🌱 Seed complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
