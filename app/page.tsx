import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Landmark, Mail, Phone, Sparkles, Shield, Zap } from "lucide-react";
import HeroCanvas from "@/components/HeroCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import GovHeroBadge from "@/components/GovHeroBadge";
import AccessibilityBar from "@/components/AccessibilityBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Utility/a11y bar */}
      <AccessibilityBar />

      {/* Hero */}
      <section className="relative h-[100svh] overflow-hidden">
        <HeroCanvas />

        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(123,255,175,0.18),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_20%,rgba(106,182,255,0.12),transparent_60%)]" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <ScrollReveal once>
            <GovHeroBadge />
          </ScrollReveal>

          <ScrollReveal once className="mt-6">
            <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-6xl md:text-7xl">
              Transforming Public Services for Every Citizen
            </h1>
          </ScrollReveal>

          <ScrollReveal once className="mt-5 max-w-2xl">
            <p className="text-pretty text-base text-white/80 sm:text-lg">
              Access secure, transparent, and efficient digital services from the Government. Apply, track, and receive updates—all in one place.
            </p>
          </ScrollReveal>

          <ScrollReveal once className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-400 px-5 py-3 font-medium text-black transition hover:bg-emerald-300"
            >
              Explore services
              <ArrowRight className="h-4 w-4 transition -translate-x-0 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10"
            >
              See features
            </Link>
          </ScrollReveal>

          <ScrollReveal once className="mt-10 flex items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-emerald-300" />
              <span>Secure & privacy-first</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-emerald-300" />
              <span>Fast, accessible, multilingual</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Popular Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <ScrollReveal once>
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">Popular Services</h2>
        </ScrollReveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Aadhaar Services",
              desc: "Enroll or update your Aadhaar details.",
              href: "/pages/services/aadhar",
            },
            {
              title: "Voter ID Services",
              desc: "Apply for new Voter ID or update details.",
              href: "/pages/services/voting",
            },
            {
              title: "Update Aadhaar",
              desc: "Residential address and personal details update.",
              href: "/pages/services/update/aadhar",
            },
          ].map((svc) => (
            <ScrollReveal key={svc.title}>
              <Link
                href={svc.href}
                className="block rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10"
              >
                <Landmark className="h-6 w-6 text-emerald-300" />
                <h3 className="mt-4 text-lg font-semibold">{svc.title}</h3>
                <p className="mt-2 text-white/70">{svc.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-emerald-300">
                  <span className="text-sm">Get started</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <ScrollReveal once>
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">
            Built for Trust, Scale, and Inclusion
          </h2>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Digital by Default",
              desc: "Paperless workflows and real-time status tracking.",
              icon: Sparkles,
            },
            {
              title: "Security First",
              desc: "Encrypted data, audited access, and compliance.",
              icon: Shield,
            },
            {
              title: "Citizen Support",
              desc: "Multi-channel help with email and phone support.",
              icon: Mail,
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

      {/* Contact/CTA */}
      <section id="get-started" className="relative overflow-hidden py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_400px_at_30%_0%,rgba(123,255,175,0.16),transparent_60%)]" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal once>
            <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
              Need assistance?
            </h2>
          </ScrollReveal>
          <ScrollReveal once className="mx-auto mt-4 max-w-2xl">
            <p className="text-white/80">
              Our helpdesk is here to support you with applications, updates, and general queries.
            </p>
          </ScrollReveal>
          <ScrollReveal once className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="mailto:support@gov.example"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-medium text-black transition hover:bg-emerald-300"
            >
              <Mail className="h-4 w-4" /> Email Support
            </Link>
            <Link
              href="tel:1800123456"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> 1800-123-456
            </Link>
          </ScrollReveal>

          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-white/70">
            <CheckCircle2 className="h-4 w-4 text-emerald-300" />
            <span>Accessible, inclusive, and secure digital governance</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <p>© {new Date().getFullYear()} Government of Example. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
