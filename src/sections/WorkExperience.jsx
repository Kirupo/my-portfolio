import { motion } from "framer-motion";

function formatDate(value) {
  if (!value) return "Present";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function WorkExperience({ experience }) {
  return (
    <section id="experience" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Work Experience</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">Engineering Timeline</h2>
          <p className="mt-4 max-w-3xl text-sm text-muted sm:text-base">
            Practical engineering experience in technical execution, mentoring, and system-level delivery.
          </p>
        </motion.div>

        <div className="space-y-4">
          {experience.map((item) => (
            <motion.article
              key={`${item.organization}-${item.startDate}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl border border-white/10 bg-[var(--card-color)] p-6 shadow-soft backdrop-blur-xl"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl">{item.role}</h3>
                  <p className="mt-1 text-sm text-accent">{item.organization}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">{item.location}</p>
                </div>
                <p className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.15em] text-muted">
                  {formatDate(item.startDate)} - {formatDate(item.endDate)}
                </p>
              </div>

              <p className="mt-4 text-sm text-muted">{item.summary}</p>

              <ul className="mt-4 space-y-2.5">
                {item.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;

