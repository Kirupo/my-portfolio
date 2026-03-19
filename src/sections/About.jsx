import { motion } from "framer-motion";

const domains = [
  "Embedded systems development",
  "Arduino-based prototyping",
  "PCB design and hardware integration",
  "SolidWorks and 3D printing",
  "Control systems with MATLAB and Simulink",
  "LabVIEW simulation",
  "Computer vision systems",
];

const highlights = [
  "Designed 3D printed components for MediTracker.",
  "Built Arduino-integrated systems.",
  "Designed compensator for magnetic levitation system.",
  "Built adaptive LED system in LabVIEW.",
  "Teaching embedded systems at Cassopia Tech Club.",
];

const contributions = [
  "Designed and 3D printed parts for the MediTracker enclosure.",
  "Integrated Arduino into hardware prototypes.",
  "Designed compensator in MATLAB for magnetic levitation.",
  "Built LabVIEW block diagram logic for adaptive LED brightness.",
  "Developed real-time sign language recognition workflow using computer vision.",
  "Designed embedded safety logic architecture for Smart Miner Helmet.",
];

function About() {
  return (
    <section id="about" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-6">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-white/10 bg-[var(--card-color)] p-7 shadow-soft backdrop-blur-xl sm:p-9"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-muted">About</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">Hardware + Software Engineering Discipline</h2>
          <p className="mt-5 max-w-4xl text-sm leading-relaxed text-muted sm:text-base">
            I build engineering systems where mechanical design, electronics, and software are planned as one
            architecture. My work focuses on reliable embedded behavior, practical prototyping, and clear technical
            execution from concept to implementation.
          </p>
        </motion.article>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl border border-white/10 bg-[var(--card-color)] p-7 shadow-soft backdrop-blur-xl"
          >
            <h3 className="font-display text-2xl">Core Technical Areas</h3>
            <ul className="mt-5 space-y-3">
              {domains.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted sm:text-base">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-2xl border border-white/10 bg-[var(--card-color)] p-7 shadow-soft backdrop-blur-xl"
          >
            <h3 className="font-display text-2xl">Recent Highlights</h3>
            <ul className="mt-5 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted sm:text-base">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accentSecondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-white/10 bg-[var(--card-color)] p-7 shadow-soft backdrop-blur-xl"
        >
          <h3 className="font-display text-2xl">Engineering Contributions</h3>
          <ul className="mt-5 space-y-3">
            {contributions.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted sm:text-base">
                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      </div>
    </section>
  );
}

export default About;
