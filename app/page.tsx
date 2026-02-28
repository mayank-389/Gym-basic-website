import Link from "next/link";
import Image from "next/image";
import {
  gymHighlights,
  membershipPlans,
  services,
  siteContent,
} from "@/lib/site-content";

const previewServices = services.slice(0, 3);
const heroBannerUrl =
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=80";

export default function Home() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="section-boundary surface-card rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200/80 px-6 py-14 sm:min-h-[62vh] sm:px-10 sm:py-16 dark:from-slate-900 dark:to-slate-800/70">
        <div className="grid h-full items-center gap-8 lg:grid-cols-[1.05fr_1fr]">
          <div className="flex h-full flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-600 dark:text-slate-300">
              Local Gym
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl dark:text-slate-100">
              {siteContent.gymName}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg dark:text-slate-300">
              {siteContent.tagline}
            </p>
            <a
              href={`tel:${siteContent.phoneNumber}`}
              className="mt-10 inline-flex w-fit rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
            >
              Call Now
            </a>
          </div>
          <div className="relative hidden overflow-hidden rounded-2xl border border-slate-300/60 shadow-lg lg:block dark:border-slate-700/70">
            <Image
              src={heroBannerUrl}
              alt="Gym banner"
              width={900}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-boundary space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">Why Choose Us</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {gymHighlights.map((item) => (
            <article key={item.label} className="surface-card card-hover rounded-2xl p-6">
              <p className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">{item.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-400">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-boundary space-y-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">Services Preview</h2>
          <Link
            href="/services"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
          >
            View All
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {previewServices.map((service) => (
            <article key={service.title} className="surface-card card-hover rounded-2xl p-6">
              <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">{service.title}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-boundary space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">Membership Plans</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {membershipPlans.map((plan) => (
            <article key={plan.name} className="surface-card card-hover rounded-2xl p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {plan.name}
              </p>
              <p className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-slate-100">{plan.price}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{plan.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-boundary surface-card rounded-2xl bg-gradient-to-r from-emerald-600/90 to-cyan-700/90 p-8 text-white">
        <h2 className="text-2xl font-bold sm:text-3xl">Ready to Start?</h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base">
          Book a free tour and choose a plan that matches your budget and fitness goals.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-transform duration-200 hover:-translate-y-0.5"
        >
          Contact Our Team
        </Link>
      </section>
    </div>
  );
}
