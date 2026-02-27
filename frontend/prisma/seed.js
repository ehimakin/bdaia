const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const COURSES = [
  {
    slug: "aligner-biomechanics",
    title: "Aligner Biomechanics Fundamentals",
    summary:
      "Force systems, attachment design, and predictability basics for clear aligner therapy.",
    description:
      "A practical, clinically focused course covering how aligners move teeth, attachment principles, and common predictability pitfalls.",
    cpdHours: 2,
    level: "Intermediate",
    tags: ["Orthodontics", "Aligners"],
    resources: [
      {
        title: "Handbook (PDF)",
        kind: "pdf",
        storageKey: "courses/aligner-biomechanics/handbook.pdf",
        mimeType: "application/pdf",
        isMembersOnly: true,
      },
      {
        title: "Intro video",
        kind: "video",
        storageKey: "courses/aligner-biomechanics/intro.mp4",
        mimeType: "video/mp4",
        isMembersOnly: true,
      },
    ],
  },
  {
    slug: "endodontics-essentials",
    title: "Endodontics Essentials: Diagnosis to Obturation",
    summary:
      "Decision-making from diagnosis, access, shaping, irrigation and obturation basics.",
    description:
      "Covers diagnosis, rubber dam, access outline, shaping strategy, irrigation protocols, and obturation options for predictable outcomes.",
    cpdHours: 3,
    level: "Beginner",
    tags: ["Endodontics"],
    resources: [
      {
        title: "Checklists (PDF)",
        kind: "pdf",
        storageKey: "courses/endodontics-essentials/checklists.pdf",
        mimeType: "application/pdf",
        isMembersOnly: true,
      },
    ],
  },
  {
    slug: "gdpr-dental-clinic",
    title: "GDPR in the Dental Clinic",
    summary:
      "Practical GDPR compliance: consent, retention, breaches, and staff processes.",
    description:
      "A clinic-friendly GDPR overview: lawful basis, data minimisation, retention schedules, SARs, breach response, and training.",
    cpdHours: 1,
    level: "Beginner",
    tags: ["Compliance", "Governance"],
    resources: [
      {
        title: "Policy templates (PDF)",
        kind: "pdf",
        storageKey: "courses/gdpr-dental-clinic/policy-templates.pdf",
        mimeType: "application/pdf",
        isMembersOnly: true,
      },
    ],
  },
  {
    slug: "implant-complications",
    title: "Implant Complications: Prevention & Management",
    summary:
      "Risk assessment, surgical/prosthetic complications, peri-implant disease and failures.",
    description:
      "Prevention-first approach to complications: planning, case selection, consent, complication recognition, and management pathways.",
    cpdHours: 4,
    level: "Advanced",
    tags: ["Implants", "Surgery"],
    resources: [
      {
        title: "Complications map (PDF)",
        kind: "pdf",
        storageKey: "courses/implant-complications/complications-map.pdf",
        mimeType: "application/pdf",
        isMembersOnly: true,
      },
      {
        title: "Case walkthrough video",
        kind: "video",
        storageKey: "courses/implant-complications/case-walkthrough.mp4",
        mimeType: "video/mp4",
        isMembersOnly: true,
      },
    ],
  },
  {
    slug: "medico-legal-reporting",
    title: "Medico-Legal Reporting for Dentists",
    summary:
      "Write clearer reports with defensible reasoning and documentation standards.",
    description:
      "How to structure reports, present evidence, avoid overstatement, and create defensible documentation aligned with expectations.",
    cpdHours: 2,
    level: "Intermediate",
    tags: ["Medico-legal", "Reporting"],
    resources: [
      {
        title: "Course handbook (PDF)",
        kind: "pdf",
        storageKey: "courses/medico-legal-reporting/handbook.pdf",
        mimeType: "application/pdf",
        isMembersOnly: true,
      },
    ],
  },
  {
    slug: "paediatric-trauma-first-24h",
    title: "Paediatric Dental Trauma: First 24 Hours",
    summary:
      "Immediate management pathways, splinting basics, and parent communication.",
    description:
      "Covers triage, diagnosis, immediate management steps, splinting basics, and follow-up schedules for common trauma scenarios.",
    cpdHours: 1,
    level: "Intermediate",
    tags: ["Paediatric", "Trauma"],
    resources: [
      {
        title: "Trauma flowchart (PDF)",
        kind: "pdf",
        storageKey: "courses/paediatric-trauma-first-24h/flowchart.pdf",
        mimeType: "application/pdf",
        isMembersOnly: true,
      },
    ],
  },
  {
    slug: "radiography-quality-assurance",
    title: "Dental Radiography Quality Assurance",
    summary:
      "Selection criteria, QA checks, audit basics, and reducing repeat exposure.",
    description:
      "Practical QA for intraoral radiography: image quality factors, positioning, audit, selection criteria, and reducing repeats.",
    cpdHours: 1,
    level: "Beginner",
    tags: ["Radiography", "Governance"],
    resources: [
      {
        title: "Audit sheet (PDF)",
        kind: "pdf",
        storageKey: "courses/radiography-quality-assurance/audit-sheet.pdf",
        mimeType: "application/pdf",
        isMembersOnly: true,
      },
    ],
  },
  {
    slug: "periodontal-risk-and-therapy",
    title: "Periodontal Risk Assessment & Non-Surgical Therapy",
    summary:
      "Risk profiling, staging/grading basics, NSPT planning, and re-evaluation.",
    description:
      "A clear workflow for periodontal care: risk assessment, periodontal charting, NSPT approach, re-evaluation, and maintenance planning.",
    cpdHours: 2,
    level: "Intermediate",
    tags: ["Periodontology"],
    resources: [
      {
        title: "Risk checklist (PDF)",
        kind: "pdf",
        storageKey: "courses/periodontal-risk-and-therapy/risk-checklist.pdf",
        mimeType: "application/pdf",
        isMembersOnly: true,
      },
    ],
  },
  {
    slug: "medical-emergencies-dental",
    title: "Medical Emergencies in Dentistry",
    summary:
      "ABC approach, common emergencies, emergency drugs and team drills.",
    description:
      "Team-based approach to emergencies: recognition, ABCDE, anaphylaxis/asthma/syncope/hypoglycaemia, and rehearsal drills.",
    cpdHours: 2,
    level: "Beginner",
    tags: ["Patient Safety", "Emergency"],
    resources: [
      {
        title: "Emergency drugs poster (PDF)",
        kind: "pdf",
        storageKey: "courses/medical-emergencies-dental/drugs-poster.pdf",
        mimeType: "application/pdf",
        isMembersOnly: true,
      },
      {
        title: "Team drill guide (PDF)",
        kind: "pdf",
        storageKey: "courses/medical-emergencies-dental/team-drills.pdf",
        mimeType: "application/pdf",
        isMembersOnly: true,
      },
    ],
  },
  {
    slug: "infection-control-sterilisation",
    title: "Infection Control & Sterilisation Workflow",
    summary:
      "Decontamination flow, instrument tracking, PPE, and audit readiness.",
    description:
      "A practical decon workflow: zoning, cleaning, packaging, sterilisation, storage, traceability, and how to remain audit-ready.",
    cpdHours: 1,
    level: "Beginner",
    tags: ["Infection Control", "Governance"],
    resources: [
      {
        title: "Decon checklist (PDF)",
        kind: "pdf",
        storageKey: "courses/infection-control-sterilisation/decon-checklist.pdf",
        mimeType: "application/pdf",
        isMembersOnly: true,
      },
    ],
  },
  {
    slug: "restorative-occlusion-basics",
    title: "Occlusion Basics for Restorative Dentistry",
    summary:
      "Contacts, guidance, parafunction, and occlusal adjustment principles.",
    description:
      "Covers functional occlusion basics, when to adjust, recognising parafunction, and avoiding common restoration-related occlusal issues.",
    cpdHours: 2,
    level: "Intermediate",
    tags: ["Restorative", "Occlusion"],
    resources: [
      {
        title: "Occlusion notes (PDF)",
        kind: "pdf",
        storageKey: "courses/restorative-occlusion-basics/notes.pdf",
        mimeType: "application/pdf",
        isMembersOnly: true,
      },
    ],
  },
  {
    slug: "consent-communication-risk",
    title: "Consent, Communication & Risk in Clinical Dentistry",
    summary:
      "Practical consent frameworks, risk communication, and documentation habits.",
    description:
      "Improve consent conversations, document risk clearly, and reduce complaints with repeatable communication patterns and templates.",
    cpdHours: 1,
    level: "Intermediate",
    tags: ["Consent", "Communication", "Medico-legal"],
    resources: [
      {
        title: "Consent templates (PDF)",
        kind: "pdf",
        storageKey: "courses/consent-communication-risk/templates.pdf",
        mimeType: "application/pdf",
        isMembersOnly: true,
      },
    ],
  },
];

async function upsertCourse(course) {
  // Keep update conservative; ensures published and keeps metadata aligned
  await prisma.course.upsert({
    where: { slug: course.slug },
    update: {
      title: course.title,
      summary: course.summary,
      description: course.description,
      cpdHours: course.cpdHours,
      level: course.level,
      tags: course.tags,
      isPublished: true,
    },
    create: {
      slug: course.slug,
      title: course.title,
      summary: course.summary,
      description: course.description,
      cpdHours: course.cpdHours,
      level: course.level,
      tags: course.tags,
      isPublished: true,
      resources: {
        create: course.resources.map((r) => ({
          title: r.title,
          kind: r.kind,
          storageKey: r.storageKey,
          mimeType: r.mimeType,
          isMembersOnly: r.isMembersOnly ?? true,
        })),
      },
    },
  });
}

async function main() {
  // Seed courses
  for (const c of COURSES) {
    await upsertCourse(c);
  }

  console.log(`🌱 Seed complete: ${COURSES.length} courses upserted`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
