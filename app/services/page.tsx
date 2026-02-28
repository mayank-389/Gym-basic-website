import { membershipPlans, services } from "@/lib/site-content";

export default function ServicesPage() {
  return (
    <section className="section-boundary space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">Our Services</h1>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-400">
          Straightforward training options for beginners, regular members, and busy professionals.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="surface-card card-hover rounded-2xl p-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white dark:bg-slate-100 dark:text-slate-900">
                {service.icon}
              </span>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 sm:text-xl">{service.title}</h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{service.description}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-500">
              Includes trainer support and progress tracking
            </p>
          </article>
        ))}
      </div>

      <div className="section-boundary space-y-5 pt-2">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 sm:text-3xl">Basic Plan Packages</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {membershipPlans.map((plan) => (
            <article key={plan.name} className="surface-card card-hover rounded-2xl p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {plan.name}
              </p>
              <p className="mt-2 text-2xl font-extrabold text-slate-900 dark:text-slate-100">{plan.price}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{plan.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
