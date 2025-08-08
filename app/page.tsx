import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Shield, Zap } from "lucide-react";
import HeroCanvas from "@/components/HeroCanvas";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative h-[100svh] overflow-hidden">
        <HeroCanvas />

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(123,255,175,0.18),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_20%,rgba(106,182,255,0.12),transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <ScrollReveal once>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
              <span className="tracking-wide">Now with 3D & smooth scroll</span>
            </div>
          </ScrollReveal>

          <ScrollReveal once className="mt-6">
            <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-6xl md:text-7xl">
              Build delightful apps with Next.js 15
            </h1>
          </ScrollReveal>

          <ScrollReveal once className="mt-5 max-w-2xl">
            <p className="text-pretty text-base text-white/70 sm:text-lg">
              A modern starter with Tailwind CSS v4, Three.js hero, and subtle
              motion that feels fast and premium.
            </p>
          </ScrollReveal>

          <ScrollReveal once className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#get-started"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-medium text-black transition hover:bg-emerald-300"
            >
              Get started
              <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10"
            >
              See features
            </Link>
          </ScrollReveal>

          <ScrollReveal once className="mt-10 flex items-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-300" />
              <span>No tracking, privacy-first</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-emerald-300" />
              <span>Fast, edge-ready</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Logos or trust bar */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-2 items-center gap-8 opacity-80 sm:grid-cols-4">
          {[
            "/next.svg",
            "/window.svg",
            "/globe.svg",
            "/file.svg",
          ].map((src, i) => (
            <ScrollReveal key={i}>
              <Image
                src={src}
                alt="logo"
                width={96}
                height={24}
                className="mx-auto h-6 w-auto dark:invert"
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <ScrollReveal once>
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Everything you need to launch faster
          </h2>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Tailwind CSS v4",
              desc: "Preconfigured with modern theming and dark-ready styles.",
              icon: Sparkles,
            },
            {
              title: "3D Hero",
              desc: "Interactive WebGL scene powered by Three.js.",
              icon: Zap,
            },
            {
              title: "Auth-ready",
              desc: "Clerk setup included for dashboard flows.",
              icon: Shield,
            },
          ].map((f, i) => (
            <ScrollReveal key={i} className="h-full">
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10">
                <f.icon className="h-6 w-6 text-emerald-300" />
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-white/70">{f.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-emerald-300">
                  <span className="text-sm">Learn more</span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="get-started" className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_400px_at_30%_0%,rgba(123,255,175,0.16),transparent_60%)]" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal once>
            <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
              Ready to ship your next idea?
            </h2>
          </ScrollReveal>
          <ScrollReveal once className="mx-auto mt-4 max-w-2xl">
            <p className="text-white/70">
              Start with a beautiful, performant foundation. Extend with your
              own components and pages in minutes.
            </p>
          </ScrollReveal>
          <ScrollReveal once className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-medium text-black transition hover:bg-emerald-300"
            >
              Go to dashboard
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://nextjs.org/docs"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10"
            >
              Documentation
            </Link>
          </ScrollReveal>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-white/70">
            <CheckCircle2 className="h-4 w-4 text-emerald-300" />
            <span>TypeScript, App Router, and ESLint ready</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <p>
            © {new Date().getFullYear()} Your Company. Built with Next.js & Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
}
