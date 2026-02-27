const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.course.upsert({
    where: { slug: "orthodontic-aligner-biomechanics" },
    update: {},
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
            storageKey: "courses/aligner-biomechanics/handbook.pdf",
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

