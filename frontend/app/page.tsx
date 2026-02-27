"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const slides = [
    "/slideshow/001.jpg",
    "/slideshow/002.jpg",
    "/slideshow/003.jpg",
    "/slideshow/004.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="relative border-b">
        {/* Slideshow background */}
        <div className="absolute inset-0 overflow-hidden">
          {slides.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>


        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
        {/* Floating logo aligned to content column, scaled to hero height */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          <div className="mx-auto max-w-6xl h-full px-4">
            <div className="relative h-full">
              <div className="absolute right-6 top-1/2 -translate-y-1/2 h-[60%] flex items-center">
                <img
                  src="/brand/logo2.png"
                  alt="British Society of Dentists in Artificial Intelligence logo"
                  className="h-full w-auto opacity-95 drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>


        {/* Content */}
        <div className="relative z-10">
          <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
            <div className="max-w-2xl space-y-6 text-white">
              <p className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide">
                CPD • Events • Member Support
              </p>

              <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                Discovering applications of AI in Dentistry
              </h1>

              <p className="text-base md:text-lg text-white/90">
                Supporting clinicians and practice teams through accredited CPD,
                evidence-based guidance, and a national professional network.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/membership" className="btn-primary">
                  Join the Society
                </Link>
                <Link href="/education" className="btn-outline bg-white/90 hover:bg-white">
                  Browse CPD
                </Link>
                <Link href="/events" className="btn-outline bg-white/90 hover:bg-white">
                  View Events
                </Link>
              </div>

              <div className="pt-6 text-sm text-white/80">
                Trusted by members across primary care, hospital dentistry, and training programmes.
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* QUICK LINKS */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Become a Member", desc: "Benefits, fees, eligibility", href: "/membership" },
              { title: "Find CPD", desc: "Courses, webinars, learning paths", href: "/education" },
              { title: "Upcoming Events", desc: "Conferences, workshops, socials", href: "/events" },
              { title: "Resources", desc: "Guidelines, templates, downloads", href: "/resources" },
            ].map((c) => (
              <Link key={c.title} href={c.href} className="rounded-2xl border-2 border-brand-600 p-5 transition hover:shadow-soft hover:border-brand-700">
                <div className="font-extrabold">{c.title}</div>
                <div className="mt-2 text-sm opacity-80">{c.desc}</div>
                <div className="mt-4 text-sm font-semibold">Explore →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold md:text-3xl">Our mission</h2>
              <p className="opacity-85">
                We support dental professionals in the emerging field of AI with evidence-based education, peer connection, and practical resources.
              </p>
              <ul className="space-y-2 text-sm opacity-90">
                <li>• Accredited CPD and learning pathways</li>
                <li>• Clinical guidance and practice-ready tools</li>
                <li>• Events that strengthen professional networks</li>
                <li>• Advocacy and standards to support the profession</li>
              </ul>
              <div className="flex gap-3 pt-2">
                <Link href="/about" className="rounded-md border-2 border-brand-600 px-4 py-2 font-semibold hover:border-brand-700 transition"
>
                  About the Society
                </Link>
                <Link href="/leadership" className="rounded-md border px-4 py-2">
                  Leadership
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border p-6">
              <div className="h-64 rounded-xl bg-gray-100 grid place-items-center text-sm opacity-70">
                Image: members / lecture / clinic (demo)
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 text-sm">
                <div className="rounded-xl border p-3">
                  <div className="font-bold">Member support</div>
                  <div className="opacity-80">Help, signposting, guidance</div>
                </div>
                <div className="rounded-xl border p-3">
                  <div className="font-bold">Quality learning</div>
                  <div className="opacity-80">Curated by clinicians</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS + EVENTS */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-2xl font-extrabold">Latest news</h2>
                <Link href="/news" className="text-sm font-semibold hover:underline">View all →</Link>
              </div>

              <div className="mt-5 space-y-4">
                {[
                  { title: "Winter CPD programme now open", meta: "CPD • Updated 2 days ago" },
                  { title: "Guidance: safeguarding and consent in practice", meta: "Resources • Updated 1 week ago" },
                  { title: "Student & trainee membership now available", meta: "Membership • Updated 2 weeks ago" },
                ].map((n) => (
                  <div key={n.title} className="rounded-2xl border p-5">
                    <div className="text-xs opacity-70">{n.meta}</div>
                    <div className="mt-1 font-extrabold">{n.title}</div>
                    <p className="mt-2 text-sm opacity-85">
                      Short summary text that explains what the member will gain by clicking through.
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-2xl font-extrabold">Upcoming events</h2>
                <Link href="/events" className="text-sm font-semibold hover:underline">View all →</Link>
              </div>

              <div className="mt-5 space-y-4">
                {[
                  { date: "MAR 18", title: "Evening seminar: infection control updates", meta: "London • In-person • 18:30" },
                  { date: "APR 02", title: "Webinar: periodontal maintenance in practice", meta: "Online • Webinar • 19:00" },
                  { date: "MAY 10", title: "Annual conference: clinical & practice track", meta: "Birmingham • Full day" },
                ].map((e) => (
                  <div key={e.title} className="rounded-2xl border-2 border-brand-300 p-5 flex gap-4 hover:border-brand-500 transition">

                    <div className="w-16 shrink-0 rounded-xl border bg-gray-50 p-3 text-center">
                      <div className="text-xs font-bold">{e.date.split(" ")[0]}</div>
                      <div className="text-lg font-extrabold leading-none">{e.date.split(" ")[1]}</div>
                    </div>
                    <div className="flex-1">
                      <div className="font-extrabold">{e.title}</div>
                      <div className="mt-1 text-sm opacity-80">{e.meta}</div>
                      <div className="mt-3 text-sm font-semibold">Details →</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="rounded-3xl border p-8 md:p-12">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-extrabold md:text-3xl">Ready to join?</h2>
                <p className="text-sm opacity-85">
                  Membership gives you discounted CPD, event access, member-only resources, and a professional network.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link href="/membership" className="rounded-md border-2 border-brand-600 px-4 py-2 font-semibold hover:border-brand-700 transition"
>
                  Membership options
                </Link>
                <Link href="/contact" className="rounded-md border px-4 py-2">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
