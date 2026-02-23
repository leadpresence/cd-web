import Image from "next/image";
import dynamic from "next/dynamic";
import Header from "./components/Header";
import ScrollReveal from "./components/ScrollReveal";
import FAQItem from "./components/FAQItem";
import TiltCard from "./components/TiltCard";
import AnimatedCounter from "./components/AnimatedCounter";
import ParallaxSection from "./components/ParallaxSection";
import GradientCursor from "./components/GradientCursor";

const HeroCanvas = dynamic(() => import("./components/HeroCanvas"), {
  ssr: false,
});

/* ─────────────── Icons (inline SVG) ─────────────── */

function IconTap() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M16 4a3 3 0 00-3 3v10.17l-1.59-1.58a3 3 0 00-4.24 4.24l7.07 7.07a3 3 0 002.12.88h5.14a5 5 0 005-5V16a3 3 0 00-6 0v-2a3 3 0 00-6 0V7a3 3 0 00-3-3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChart() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="18" width="6" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="12" width="6" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="22" y="4" width="6" height="24" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function IconBell() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M16 4a8 8 0 00-8 8c0 4-2 6-3 7h22c-1-1-3-3-3-7a8 8 0 00-8-8zM13 27a3 3 0 006 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="6" r="4" fill="#C85A54" />
    </svg>
  );
}

function IconReport() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="2" width="20" height="28" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M11 10h10M11 16h10M11 22h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M22 22l-2 2-1-1" stroke="#2D8B7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="12" cy="10" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 26c0-4.42 3.58-8 8-8s8 3.58 8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="22" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M22 18c3.31 0 6 2.69 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M16 28S4 20 4 12a6 6 0 0112 0 6 6 0 0112 0c0 8-12 16-12 16z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M12 16l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconLink() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M13 19a5 5 0 007.07 0l4-4a5 5 0 00-7.07-7.07l-2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M19 13a5 5 0 00-7.07 0l-4 4a5 5 0 007.07 7.07l2-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function IconSimple() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8" />
      <path d="M11 16l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l8 4v6c0 5.25-3.5 10-8 11-4.5-1-8-5.75-8-11V6l8-4z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="9" fill="#2D8B7E" fillOpacity="0.1" />
      <path d="M5.5 9.5l2 2 5-5" stroke="#2D8B7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="9" fill="#E8E5E1" />
      <path d="M6.5 6.5l5 5M11.5 6.5l-5 5" stroke="#9B9B9B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconApple() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M15.17 10.59c-.02-2.1 1.72-3.12 1.8-3.17-1-.44-2.47-1.82-3.11-1.82-.61 0-1.54.36-2.04.36-.52 0-1.33-.35-2.18-.35C7.97 5.62 6.5 6.72 5.7 8.3c-1.63 3.17-.42 7.86 1.18 10.43.78 1.26 1.71 2.68 2.93 2.63 1.18-.05 1.62-.76 3.05-.76 1.42 0 1.82.76 3.06.73 1.27-.02 2.06-1.29 2.83-2.55.9-1.45 1.26-2.87 1.28-2.94-.03-.01-2.46-1.06-2.86-3.25zM12.87 4.2c.63-.84 1.06-2 .94-3.2-.91.04-2.02.68-2.67 1.5-.58.73-1.1 1.92-.96 3.04 1.02.09 2.06-.56 2.69-1.34z" />
    </svg>
  );
}

function IconPlayStore() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
      <path d="M3.18 1.32A1 1 0 002 2.24v15.52a1 1 0 001.18.92l9.35-8.5.18-.18L3.18 1.32zM14 11.5l-2.38-2.16L14 7.18 17.06 9a1 1 0 010 1.72L14 11.5z" />
      <path d="M11.62 9.34L4.14 2.4l8.54 5.08-1.06.86zM4.14 17.32l7.48-6.94 1.06.86-8.54 5.08z" opacity="0.7" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="#F4D49F">
      <path d="M8 1l2.12 4.3 4.74.69-3.43 3.34.81 4.72L8 11.77l-4.24 2.23.81-4.72L1.14 5.94l4.74-.69L8 1z" />
    </svg>
  );
}

/* ─────────────── Data ─────────────── */

const differentiators = [
  {
    icon: <IconSimple />,
    title: "Radically simple",
    description:
      "One-tap logging. No multi-step forms, no confusing dashboards. Designed so a 70-year-old can use it on their first try.",
    color: "bg-primary-50 text-primary",
  },
  {
    icon: <IconUsers />,
    title: "Built for both sides of care",
    description:
      "Most medication apps serve patients or caregivers — not both. CareDose connects them in one shared experience.",
    color: "bg-[#FDF6EC] text-secondary-dark",
  },
  {
    icon: <IconChart />,
    title: "Streaks & scores that motivate",
    description:
      "A daily adherence score and streak counter turn medication into a simple habit. Small wins add up to real health outcomes.",
    color: "bg-primary-50 text-primary-dark",
  },
  {
    icon: <IconHeart />,
    title: "No clutter, no noise",
    description:
      "No social feeds, no wellness articles, no ads. Just your meds, your reminders, and the people who care about you.",
    color: "bg-[#FFF5F4] text-status-missed",
  },
];

const solutions = [
  {
    icon: <IconTap />,
    title: "One-Tap Logging",
    description:
      "Open the app, tap \"taken\", done. No typing, no searching. Your medication list is always one tap away.",
    color: "bg-primary-50 text-primary",
  },
  {
    icon: <IconChart />,
    title: "Daily Adherence Score",
    description:
      "See your streak and adherence percentage at a glance. A simple number that keeps you motivated and your doctor informed.",
    color: "bg-[#FDF6EC] text-secondary-dark",
  },
  {
    icon: <IconBell />,
    title: "Caregiver Alerts",
    description:
      "Caregivers get instant notifications when a dose is missed or late. No nagging calls needed — just quiet confidence.",
    color: "bg-[#FFF5F4] text-status-missed",
  },
  {
    icon: <IconReport />,
    title: "Doctor-Ready Reports",
    description:
      "Export clean weekly reports to share at your next appointment. Walk in prepared, not guessing.",
    color: "bg-primary-50 text-primary-dark",
  },
];

const steps = [
  {
    number: "1",
    title: "Add your medications",
    description: "Enter your meds, dosage, and schedule in under a minute. We keep it simple — no medical jargon.",
  },
  {
    number: "2",
    title: "Invite your care circle",
    description: "Add family members, friends, or nurses as caregivers. They get their own view — no shared passwords needed.",
  },
  {
    number: "3",
    title: "Get gentle reminders",
    description: "Timely notifications at just the right moment. If you miss one, your caregivers are quietly alerted.",
  },
  {
    number: "4",
    title: "Log with one tap",
    description: "Open the app, tap \"taken\". Five seconds. Your streak grows, your caregiver sees the update, your doctor gets a report.",
  },
];

const testimonials = [
  {
    quote:
      "I used to worry all day about whether Mama took her blood pressure pills. Now I just open CareDose and I know. It changed everything for our family.",
    name: "Tunde O.",
    role: "Caregiver, Lagos",
    avatar: "T",
    color: "bg-secondary",
  },
  {
    quote:
      "The app is so simple. I just tap the button when I take my medicine. My grandchildren set it up for me and I haven't needed their help since.",
    name: "Adeola M.",
    role: "Patient, age 68",
    avatar: "A",
    color: "bg-primary",
  },
  {
    quote:
      "After Dad's stroke, he's on seven different medications. CareDose lets me, my sister in Dallas, and his home nurse all see the same dashboard. No more confused phone calls.",
    name: "Karen M.",
    role: "Caregiver, Ohio",
    avatar: "K",
    color: "bg-secondary-dark",
  },
  {
    quote:
      "I'm 74 and I live alone. My daughter worries. But now she can see that I'm taking my pills every morning — and I can see my streak going up. It makes us both feel better.",
    name: "Robert J.",
    role: "Patient, age 74",
    avatar: "R",
    color: "bg-primary-light",
  },
  {
    quote:
      "Managing my mom's diabetes meds from across the country used to keep me up at night. One notification from CareDose and I know she's okay.",
    name: "Jessica L.",
    role: "Caregiver, California",
    avatar: "J",
    color: "bg-[#6B8E9B]",
  },
  {
    quote:
      "As a pharmacist, I recommend CareDose to patients who struggle with adherence. The family monitoring feature means I'm not the only one holding them accountable.",
    name: "Dr. Ngozi A.",
    role: "Pharmacist",
    avatar: "N",
    color: "bg-primary-dark",
  },
];

const freeFeatures = [
  { text: "Medication & supplement logging", included: true },
  { text: "Daily reminders", included: true },
  { text: "Adherence streak & score", included: true },
  { text: "Connect 1 caregiver", included: true },
  { text: "Real-time caregiver alerts", included: false },
  { text: "Weekly reports & PDF export", included: false },
  { text: "Multi-caregiver support", included: false },
  { text: "Multi-device sync", included: false },
];

const familyFeatures = [
  { text: "Everything in Free", included: true },
  { text: "Real-time caregiver alerts", included: true },
  { text: "Unlimited caregivers per patient", included: true },
  { text: "Weekly adherence reports", included: true },
  { text: "PDF export for doctors", included: true },
  { text: "Multi-device sync", included: true },
  { text: "Multiple patient profiles", included: true },
  { text: "Priority support", included: true },
];

const faqs = [
  {
    question: "Is my health data secure?",
    answer:
      "Absolutely. CareDose uses end-to-end encryption and never shares your data with third parties. Your health information stays between you and the people you choose to share it with. We comply with international health data regulations including HIPAA standards.",
  },
  {
    question: "How does peer-to-peer medication monitoring work?",
    answer:
      "A patient can invite any number of caregivers — family members, friends, or nurses — into their CareDose care circle. Each caregiver gets their own view showing which doses were taken, missed, or late. Everything updates in real time, so no one needs to call and ask \"Did you take your pills?\"",
  },
  {
    question: "Can multiple caregivers monitor the same patient?",
    answer:
      "Yes! With CareDose Family, you can connect unlimited caregivers to a single patient. A daughter in California, a son in New York, and a home nurse can all see the same medication status — no confusion, no conflicting information.",
  },
  {
    question: "What if I forget to log a dose?",
    answer:
      "CareDose sends gentle reminders at your scheduled times. If you still miss logging, your connected caregivers will be quietly notified. You can always log a past dose manually — we make it easy to keep your records accurate.",
  },
  {
    question: "Is CareDose available in my country?",
    answer:
      "CareDose is available worldwide on iOS and Android. We support 15 languages including English, French, Spanish, Yoruba, Igbo, Hausa, Swahili, and more — because health doesn't have borders.",
  },
  {
    question: "How is CareDose different from other medication apps?",
    answer:
      "Most medication apps are built for one person managing their own pills. CareDose is built for the whole care relationship — patients and caregivers together. It's radically simple (one-tap logging), clutter-free (no social feeds or ads), and designed so someone who avoids complex apps can use it confidently on day one.",
  },
];

/* ─────────────── Page ─────────────── */

export default function Home() {
  return (
    <>
      <GradientCursor />
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <WhyCareDoseSection />
        <PeerMonitoringSection />
        <SolutionSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}

/* ─────────────── HERO ─────────────── */

function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 noise-overlay">
      {/* Three.js background */}
      <HeroCanvas />

      {/* Floating decorative blobs */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/[0.03] rounded-full blur-3xl float-slow pointer-events-none" />
      <div className="absolute bottom-10 right-[5%] w-96 h-96 bg-secondary/[0.04] rounded-full blur-3xl float-slow-delayed pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-primary-light/[0.02] rounded-full blur-3xl float-slow-reverse pointer-events-none -translate-x-1/2 -translate-y-1/2" />

      <div className="section-container section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6 animate-fade-in border border-primary/10">
              <span className="w-2 h-2 bg-primary rounded-full badge-pulse" />
              For patients &amp; caregivers
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-txt leading-[1.1] tracking-tight mb-6 animate-fade-in-up">
              Never miss a dose.{" "}
              <span className="gradient-text-animated">Never worry alone.</span>
            </h1>

            <p className="text-lg sm:text-xl text-txt-secondary leading-relaxed mb-4 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              CareDose is a simple medication and supplement tracker built for
              older adults managing multiple meds — and the family, friends, and
              caregivers who look out for them.
            </p>

            <p className="text-base text-txt-tertiary leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              One-tap logging. Daily streaks. Real-time caregiver monitoring.
              So no one manages medications alone.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="#download"
                className="btn-glow inline-flex items-center justify-center gap-2.5 bg-txt text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-black transition-colors hover:shadow-lg hover:shadow-primary/10"
              >
                <IconApple />
                Download for iPhone
              </a>
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2.5 bg-white/80 backdrop-blur-sm text-txt font-semibold px-6 py-3.5 rounded-xl border border-border hover:border-txt transition-all hover:bg-white"
              >
                <IconPlayStore />
                Get it on Google Play
              </a>
            </div>

            <a
              href="#why-caredose"
              className="inline-flex items-center gap-1.5 text-primary font-medium hover:gap-2.5 transition-all animate-fade-in-up"
              style={{ animationDelay: "0.45s" }}
            >
              See why families trust CareDose
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Phone Mockup with parallax */}
          <ParallaxSection speed={-0.08} className="hidden lg:flex justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <TiltCard className="phone-frame w-[280px]">
              <div className="phone-screen">
                <div className="phone-notch" />
                <div className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-txt-tertiary font-medium">Good morning</p>
                      <p className="text-sm font-bold text-txt">Adeola</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="text-[10px] font-bold text-primary bg-primary-50 px-2 py-0.5 rounded-full">
                        🔥 12-day streak
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-4 text-white text-center">
                    <p className="text-[10px] font-medium opacity-80">Today&apos;s Adherence</p>
                    <p className="text-3xl font-extrabold my-1">94%</p>
                    <p className="text-[10px] opacity-70">3 of 4 doses taken</p>
                  </div>

                  {[
                    { name: "Metformin 500mg", time: "8:00 AM", taken: true },
                    { name: "Lisinopril 10mg", time: "8:00 AM", taken: true },
                    { name: "Vitamin D3", time: "12:00 PM", taken: true },
                    { name: "Amlodipine 5mg", time: "6:00 PM", taken: false },
                  ].map((med) => (
                    <div
                      key={med.name}
                      className="flex items-center gap-3 bg-white rounded-xl p-3 border border-border"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-[10px] font-bold ${
                          med.taken ? "bg-primary" : "bg-border"
                        }`}
                      >
                        {med.taken ? "✓" : "–"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold text-txt truncate">{med.name}</p>
                        <p className="text-[9px] text-txt-tertiary">{med.time}</p>
                      </div>
                      {!med.taken && (
                        <div className="bg-primary text-white text-[9px] font-bold px-2.5 py-1 rounded-full">
                          Take
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </ParallaxSection>
        </div>

        {/* Trust bar */}
        <div className="mt-16 pt-10 border-t border-border/50">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm text-txt-tertiary">
              <div className="flex items-center gap-1.5">
                <IconShield />
                <span>End-to-end encrypted</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <span className="font-semibold text-txt">
                  <AnimatedCounter target={4.9} decimals={1} />
                </span>
                <span>rating</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-primary font-semibold">
                  <AnimatedCounter target={15} suffix="+" />
                </span>
                <span>languages supported</span>
              </div>
              <div className="flex items-center gap-1.5">
                <IconUsers />
                <span>Built for families</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── PROBLEM ─────────────── */

function ProblemSection() {
  return (
    <section className="py-20 md:py-28 bg-white wave-divider wave-divider-surface relative">
      <div className="section-container section-padding">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              The Problem
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-txt mb-5">
              Medication shouldn&apos;t be a source of stress
            </h2>
            <p className="text-lg text-txt-secondary">
              For millions of families, managing daily medications creates worry on both sides —
              for the person taking them and for the people who care.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              emoji: "😰",
              pain: "\"Did I take my pills today?\"",
              detail:
                "Older adults managing 3, 5, or 7 daily medications lose track easily. A missed dose can mean a trip to the ER — or worse.",
            },
            {
              emoji: "📱",
              pain: "\"Is Mom okay?\"",
              detail:
                "Caregivers living in another city call every morning to check. But calling isn't monitoring — and it adds guilt on both sides.",
            },
            {
              emoji: "🩺",
              pain: "\"Are you taking your meds?\"",
              detail:
                "Doctors ask, but patients guess. Without clear data, appointments become a game of estimation instead of real progress.",
            },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <div className="bg-surface-alt rounded-2xl p-7 h-full">
                <span className="text-3xl mb-4 block">{item.emoji}</span>
                <h3 className="text-lg font-bold text-txt mb-2">{item.pain}</h3>
                <p className="text-txt-secondary leading-relaxed">{item.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── WHY CAREDOSE IS DIFFERENT ─────────────── */

function WhyCareDoseSection() {
  return (
    <section id="why-caredose" className="py-20 md:py-28 bg-surface relative overflow-hidden">
      <ParallaxSection speed={0.15} className="absolute top-20 -left-20 w-64 h-64 bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />
      <ParallaxSection speed={-0.1} className="absolute bottom-20 -right-20 w-80 h-80 bg-secondary/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="section-container section-padding relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-6">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Why CareDose
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-txt mb-5">
              Not just another pill reminder
            </h2>
            <p className="text-lg text-txt-secondary">
              Most medication apps are built for one person tracking their own pills.
              CareDose is built for the entire care relationship — patients and
              caregivers, together.
            </p>
          </div>
        </ScrollReveal>

        {/* Value proposition callout */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 sm:p-10 text-white text-center mb-14 relative overflow-hidden noise-overlay">
            <p className="text-sm font-medium opacity-80 uppercase tracking-wider mb-3">Our Promise</p>
            <p className="text-2xl sm:text-3xl font-bold leading-snug">
              The simplest way for patients to stay on track —
              and the easiest way for caregivers to know they&apos;re okay.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {differentiators.map((item, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <TiltCard className="h-full">
                <div className="bg-white rounded-2xl p-7 shadow-card h-full glow-border">
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-5`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-txt mb-2">{item.title}</h3>
                  <p className="text-txt-secondary leading-relaxed">{item.description}</p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── PEER-TO-PEER MONITORING ─────────────── */

function PeerMonitoringSection() {
  return (
    <section id="monitoring" className="py-20 md:py-28 bg-white relative overflow-hidden wave-divider wave-divider-surface">
      <ParallaxSection speed={0.12} className="absolute top-40 -right-32 w-96 h-96 bg-primary/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="section-container section-padding relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Peer-to-Peer Monitoring
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-txt mb-5">
              Care that connects, not just tracks
            </h2>
            <p className="text-lg text-txt-secondary">
              A patient can invite multiple caregivers — family, friends, or nurses — into the same
              app. Everyone sees at a glance whether doses were taken, missed, or late. No phone
              calls, no guesswork.
            </p>
          </div>
        </ScrollReveal>

        {/* How it works visually */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="glass-card rounded-2xl p-8 sm:p-10 shadow-soft">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-16 h-16 rounded-full bg-primary-50 text-primary flex items-center justify-center mx-auto mb-4">
                    <IconTap />
                  </div>
                  <p className="font-bold text-txt mb-1">Patient logs a dose</p>
                  <p className="text-sm text-txt-tertiary">One tap, five seconds</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="hidden sm:block">
                    <svg width="80" height="24" viewBox="0 0 80 24" fill="none">
                      <path d="M4 12h72M68 6l8 6-8 6" stroke="#2D8B7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-xs text-primary font-medium mt-1">Instant sync</p>
                  </div>
                  <div className="sm:hidden text-primary text-2xl">↓</div>
                </div>
                <div>
                  <div className="w-16 h-16 rounded-full bg-[#FDF6EC] text-secondary-dark flex items-center justify-center mx-auto mb-4">
                    <IconUsers />
                  </div>
                  <p className="font-bold text-txt mb-1">Caregivers see the update</p>
                  <p className="text-sm text-txt-tertiary">Real-time dashboard &amp; alerts</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Mini-stories */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollReveal delay={1}>
            <div className="bg-surface rounded-2xl p-8 h-full border border-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center text-lg">
                  M
                </div>
                <div>
                  <p className="font-bold text-txt">Living alone</p>
                  <p className="text-sm text-txt-tertiary">Margaret, 72 — Atlanta, GA</p>
                </div>
              </div>
              <p className="text-txt-secondary leading-relaxed mb-4">
                Margaret lives alone and takes five medications daily. Her daughter Lisa
                lives in Chicago — 700 miles away. Every morning, Margaret logs her doses
                with a single tap. Lisa opens CareDose on her lunch break and sees a
                green checkmark next to every medication.
              </p>
              <p className="text-txt-secondary leading-relaxed mb-4">
                One Tuesday, Margaret&apos;s blood thinner shows &ldquo;missed&rdquo; at 10 AM.
                Lisa gets a notification and calls — turns out Margaret simply forgot after
                a doctor&apos;s appointment. A quick reminder, and the dose is taken.
              </p>
              <div className="bg-primary-50 rounded-xl p-4">
                <p className="text-sm font-semibold text-primary">
                  &ldquo;I don&apos;t need to call Mom every morning anymore. I just check the app
                  and I know she&apos;s okay.&rdquo;
                </p>
                <p className="text-xs text-primary-dark mt-1">— Lisa, Margaret&apos;s daughter</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="bg-surface rounded-2xl p-8 h-full border border-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full bg-secondary text-white font-bold flex items-center justify-center text-lg">
                  E
                </div>
                <div>
                  <p className="font-bold text-txt">Living with family</p>
                  <p className="text-sm text-txt-tertiary">Emmanuel, 65 — Houston, TX</p>
                </div>
              </div>
              <p className="text-txt-secondary leading-relaxed mb-4">
                Emmanuel lives with his wife Grace and his son David. He manages diabetes
                and high blood pressure — six pills a day across three different times.
                Before CareDose, Grace would ask &ldquo;Did you take your evening pills?&rdquo;
                and Emmanuel would get frustrated. David would text from work to double-check.
              </p>
              <p className="text-txt-secondary leading-relaxed mb-4">
                Now, all three see the same dashboard. Grace doesn&apos;t need to ask.
                David sees the status from his office. Emmanuel feels trusted, not nagged.
              </p>
              <div className="bg-[#FDF6EC] rounded-xl p-4">
                <p className="text-sm font-semibold text-secondary-dark">
                  &ldquo;We stopped arguing about pills. Everyone just checks the app.
                  It took the tension out of something that was causing real friction.&rdquo;
                </p>
                <p className="text-xs text-secondary-dark mt-1">— Grace, Emmanuel&apos;s wife</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Connection features */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto mt-14 grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: <IconLink />,
                title: "Invite anyone",
                description: "Family, friends, neighbors, nurses — anyone you trust can join your care circle.",
              },
              {
                icon: <IconBell />,
                title: "Smart alerts",
                description: "Caregivers only get notified when something needs attention. No spam, no noise.",
              },
              {
                icon: <IconShield />,
                title: "Private by default",
                description: "Patients control who sees what. Revoke access anytime with one tap.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center mx-auto mb-3">
                  {item.icon}
                </div>
                <h4 className="font-bold text-txt mb-1">{item.title}</h4>
                <p className="text-sm text-txt-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────── SOLUTION / FEATURES ─────────────── */

function SolutionSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-surface">
      <div className="section-container section-padding">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Core Features
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-txt mb-5">
              Everything you need, nothing you don&apos;t
            </h2>
            <p className="text-lg text-txt-secondary">
              Designed for real people — not tech experts. Simple tools that actually get used,
              every single day.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {solutions.map((item, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <TiltCard className="h-full">
                <div className="bg-white rounded-2xl p-7 shadow-card h-full glow-border">
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-5`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-txt mb-2">{item.title}</h3>
                  <p className="text-txt-secondary leading-relaxed">{item.description}</p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── HOW IT WORKS ─────────────── */

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white wave-divider wave-divider-surface relative">
      <div className="section-container section-padding">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-txt mb-5">
              Set up in under a minute. Stay on track every day.
            </h2>
            <p className="text-lg text-txt-secondary">
              Whether you&apos;re a patient or a caregiver, getting started takes four simple steps.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto space-y-0">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <div className="relative flex gap-5 pb-10 last:pb-0">
                {i < steps.length - 1 && <div className="step-line" />}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center shadow-soft">
                  {step.number}
                </div>
                <div className="pt-1.5">
                  <h3 className="text-lg font-bold text-txt mb-1">{step.title}</h3>
                  <p className="text-txt-secondary leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── TESTIMONIALS ─────────────── */

function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-surface relative overflow-hidden">
      <ParallaxSection speed={0.1} className="absolute top-10 left-[5%] w-64 h-64 bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />
      <ParallaxSection speed={-0.08} className="absolute bottom-20 right-[10%] w-72 h-72 bg-secondary/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="section-container section-padding relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Loved by Families
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-txt mb-5">
              Real stories from patients and caregivers
            </h2>
            <p className="text-lg text-txt-secondary">
              Peace of mind for caregivers. Confidence for patients. Hear how CareDose
              changed their daily routine.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={(i % 3) + 1}>
              <div className="bg-white rounded-2xl p-7 shadow-card card-hover h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <StarIcon key={s} />
                  ))}
                </div>
                <blockquote className="text-txt leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div
                    className={`w-10 h-10 rounded-full ${t.color} text-white font-bold text-sm flex items-center justify-center`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-txt">{t.name}</p>
                    <p className="text-xs text-txt-tertiary">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <p className="text-center text-sm text-txt-tertiary mt-10">
            Trusted by thousands of patients and caregivers worldwide.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────── PRICING ─────────────── */

function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="section-container section-padding">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-txt mb-5">
              Start free. Upgrade when your family needs more.
            </h2>
            <p className="text-lg text-txt-secondary">
              CareDose Free gives you everything to start. CareDose Family unlocks the full
              power of peer-to-peer monitoring for the whole care circle.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Free Plan */}
          <ScrollReveal delay={1}>
            <TiltCard className="h-full">
              <div className="bg-surface rounded-2xl p-8 border border-border h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-txt mb-1">CareDose Free</h3>
                  <p className="text-sm text-txt-tertiary">For individual patients</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-txt">Free</span>
                  <span className="text-txt-tertiary ml-1">forever</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {freeFeatures.map((f) => (
                    <li key={f.text} className="flex items-center gap-2.5">
                      {f.included ? <IconCheck /> : <IconX />}
                      <span className={f.included ? "text-txt" : "text-txt-tertiary"}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#download"
                  className="btn-glow block text-center bg-white text-primary font-semibold px-6 py-3.5 rounded-xl border-2 border-primary hover:bg-primary hover:text-white transition-all"
                >
                  Get Started Free
                </a>
              </div>
            </TiltCard>
          </ScrollReveal>

          {/* Family Plan */}
          <ScrollReveal delay={2}>
            <TiltCard className="h-full">
              <div className="bg-white rounded-2xl p-8 border-2 border-primary shadow-card relative h-full flex flex-col glow-border">
                <div className="absolute -top-3 left-8 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  Best for Families
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-txt mb-1">CareDose Family</h3>
                  <p className="text-sm text-txt-tertiary">For patients &amp; their care circle</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-txt">$4.99</span>
                  <span className="text-txt-tertiary ml-1">/month</span>
                </div>
                <ul className="space-y-3 flex-1 mb-8">
                  {familyFeatures.map((f) => (
                    <li key={f.text} className="flex items-center gap-2.5">
                      <IconCheck />
                      <span className="text-txt">{f.text}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#download"
                  className="btn-glow block text-center bg-primary text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-primary-dark transition-all hover:shadow-soft"
                >
                  Start 14-Day Free Trial
                </a>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── FAQ ─────────────── */

function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-surface">
      <div className="section-container section-padding">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-txt mb-5">
              Questions? We&apos;ve got answers.
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-card">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────── FINAL CTA ─────────────── */

function FinalCTASection() {
  return (
    <section id="download" className="py-20 md:py-28">
      <div className="section-container section-padding">
        <ScrollReveal>
          <div className="cta-gradient rounded-3xl p-10 sm:p-14 lg:p-20 text-center text-white relative overflow-hidden noise-overlay">
            <div className="absolute top-0 left-0 w-80 h-80 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 float-slow" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 float-slow-delayed" />
            <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-white/[0.03] rounded-full float-slow-reverse" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
                Your loved ones deserve
                <br className="hidden sm:block" /> peace of mind.
              </h2>
              <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10">
                Join thousands of families who trust CareDose to keep medication
                on track — so no one has to worry alone.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2.5 bg-white text-primary-dark font-bold px-8 py-4 rounded-xl hover:bg-surface transition-colors text-lg"
                >
                  <IconApple />
                  Download for iPhone
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2.5 bg-white/15 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/25 transition-colors text-lg border border-white/20"
                >
                  <IconPlayStore />
                  Get it on Google Play
                </a>
              </div>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-1.5 text-white/70 hover:text-white font-medium mt-6 transition-colors"
              >
                See how it works
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────── FOOTER ─────────────── */

function Footer() {
  return (
    <footer className="bg-txt py-12">
      <div className="section-container section-padding">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image src="/pill-icon.svg" alt="CareDose" width={32} height={32} className="brightness-0 invert" />
              <span className="text-lg font-bold text-white">
                Care<span className="text-primary-light">Dose</span>
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Simple medication tracking for patients. Real-time peace of mind
              for caregivers. Built for both sides of care.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Why CareDose", href: "#why-caredose" },
                { label: "Monitoring", href: "#monitoring" },
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Help Center", href: "#" },
                { label: "Contact Us", href: "#" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/50 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-2.5">
              {["Twitter", "Instagram", "LinkedIn", "Facebook"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} CareDose. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-sm text-white/40 hover:text-white/70 transition-colors">
              Privacy
            </a>
            <a href="/terms" className="text-sm text-white/40 hover:text-white/70 transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
