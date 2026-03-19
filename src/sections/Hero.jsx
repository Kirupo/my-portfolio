import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="mx-auto w-full max-w-5xl text-center"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Electromechanical Engineer</p>
        <h1 className="hero-name mt-5 font-display text-4xl leading-tight sm:text-6xl lg:text-7xl">Kirubel Girma</h1>
        <p className="mx-auto mt-6 max-w-4xl text-sm text-muted sm:text-lg">
          Developer | Computer Vision Projects | Embedded Systems | PCB Design | SolidWorks
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-muted sm:text-base">
          Building reliable systems that connect mechanical design, electronics, and production-grade software.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-[var(--accent-color)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href="#certificates"
            className="rounded-full border border-accent/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-accent transition hover:bg-accent/10"
          >
            View Certificates
          </a>
        </div>

        <a href="#about" className="scroll-indicator mt-14 inline-block text-xs uppercase tracking-[0.28em] text-muted">
          Scroll
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
