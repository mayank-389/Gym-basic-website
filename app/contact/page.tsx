import { siteContent } from "@/lib/site-content";

export default function ContactPage() {
  return (
    <section className="section-boundary space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 sm:text-4xl">Contact Us</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400">Reach out today and start your fitness journey.</p>
      </div>

      <div className="surface-card grid gap-6 rounded-2xl p-6 sm:grid-cols-2 sm:p-8">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Phone Number</p>
          <a
            href={`tel:${siteContent.phoneNumber}`}
            className="mt-1 block text-lg font-semibold text-slate-900 transition-colors hover:text-slate-700 dark:text-slate-100 dark:hover:text-slate-300"
          >
            {siteContent.phoneNumber}
          </a>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Address</p>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{siteContent.address}</p>
        </div>

        <div className="sm:text-right">
          <p className="text-sm text-slate-500 dark:text-slate-400">WhatsApp</p>
          <a
            href={`https://wa.me/${siteContent.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-500"
          >
            Chat on WhatsApp
          </a>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Gym Hours</p>
          <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{siteContent.hoursWeekdays}</p>
          <p className="text-sm text-slate-700 dark:text-slate-300">{siteContent.hoursWeekend}</p>
        </div>
      </div>

      <div className="surface-card overflow-hidden rounded-2xl">
        <iframe
          title="Gym Location"
          src={siteContent.mapEmbedUrl}
          className="h-80 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
