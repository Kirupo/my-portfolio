import { motion } from "framer-motion";

const metrics = [
  { label: "Projects", value: "10+" },
  { label: "Certificates", value: "5" },
  { label: "Core Domains", value: "4" },
];

const focusAreas = [
  "Embedded systems and control logic",
  "Computer vision and applied AI",
  "CAD, SolidWorks, and prototype fabrication",
];

function ProfessionalSnapshot() {
  return (
    <section className="px-4 pb-8 sm:pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
        className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-[1.2fr_1.8fr_1fr]"
      >
        <article className="rounded-2xl border border-white/10 bg-[var(--card-color)] p-5 shadow-soft backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Snapshot</p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {metrics.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 p-3 text-center">
                <p className="font-display text-xl">{item.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-white/10 bg-[var(--card-color)] p-5 shadow-soft backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Primary Focus</p>
          <ul className="mt-4 space-y-2.5">
            {focusAreas.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-white/10 bg-[var(--card-color)] p-5 shadow-soft backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Quick Links</p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="https://www.linkedin.com/in/kirubel-girma-9a0586259/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-accent/45 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-accent transition hover:bg-accent/10"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Kirupo"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-fg transition hover:border-accent"
            >
              GitHub
            </a>
            <a
              href="mailto:kirubelg217@gmail.com"
              className="rounded-full border border-white/20 px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-fg transition hover:border-accent"
            >
              Email
            </a>
          </div>
        </article>
      </motion.div>
    </section>
  );
}

export default ProfessionalSnapshot;

