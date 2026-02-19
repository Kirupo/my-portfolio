import { motion } from "framer-motion";

const badges = ["Embedded Systems", "Control Engineering", "3D Prototyping", "Computer Vision", "Full-Stack Apps"];

function Hero() {
  return (
    <section id="hero" className="relative px-4 py-16 sm:py-24 lg:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Electromechanical Engineer</p>
          <h1 className="hero-name mt-4 font-display text-4xl leading-tight sm:text-6xl lg:text-7xl">
            KIRUBEL GIRMA
          </h1>
          <p className="mt-5 max-w-2xl text-sm text-muted sm:text-lg">
            Embedded Systems | Control Engineering | AI & Full-Stack Development
          </p>
          <p className="mt-5 max-w-2xl text-sm text-muted sm:text-base">
            I build production-minded systems that combine mechanical design, electronics, and software into one
            seamless architecture.
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {badges.map((badge) => (
              <span key={badge} className="rounded-full border border-accent/35 px-3 py-1 text-xs uppercase tracking-wide text-fg">
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-[var(--accent-color)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:opacity-90"
            >
              Explore Projects
            </a>
            <a
              href="#certificates"
              className="rounded-full border border-accent/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-accent transition hover:bg-accent/10"
            >
              View Credentials
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
          className="glass-card neon-border rounded-3xl border border-white/10 p-6"
        >
          <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-accent/45 bg-gradient-to-br from-accent/25 to-accentSecondary/25 shadow-glow sm:h-52 sm:w-52">
            <span className="font-display text-5xl tracking-wider text-white sm:text-6xl">KG</span>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl border border-white/10 p-3">
              <p className="font-display text-2xl">8+</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted">Projects</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-3">
              <p className="font-display text-2xl">5</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted">Certificates</p>
            </div>
            <div className="rounded-2xl border border-white/10 p-3">
              <p className="font-display text-2xl">3</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted">Domains</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
