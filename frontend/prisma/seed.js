const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.course.upsert({
    where: { slug: "medico-legal-reporting" },
    update: {},
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

