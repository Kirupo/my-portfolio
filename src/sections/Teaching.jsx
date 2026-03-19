import { motion } from "framer-motion";

const points = [
  "Embedded Systems Instructor at Cassopia Tech Club.",
  "Teaching Arduino, circuit design, and embedded fundamentals.",
  "Mentoring students through hands-on system-building projects.",
  "Focused on practical engineering workflows from concept to implementation.",
];

function Teaching() {
  return (
    <section id="teaching" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-white/10 bg-[var(--card-color)] p-7 shadow-soft backdrop-blur-xl sm:p-9"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Teaching & Leadership</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">Technical Mentorship Through Building</h2>

          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-muted sm:text-base">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}

export default Teaching;

