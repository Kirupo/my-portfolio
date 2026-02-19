import { motion } from "framer-motion";

const coreSkills = [
  "Arduino and embedded firmware for real-time behavior",
  "3D printing, SolidWorks, and rapid mechanical prototyping",
  "Control systems design in MATLAB and Simulink",
  "LabVIEW simulation and adaptive logic design",
  "Computer vision pipelines with MediaPipe and OpenCV",
  "Hardware-software integration and project execution",
];

const signatureWins = [
  "Designed and 3D-printed the MediTracker enclosure with iterative testing for fit, airflow, and sensor stability.",
  "Integrated Arduino boards into custom prototypes with reliable sensor and actuator control.",
  "Designed the compensator in MATLAB and implemented the control model in Simulink for Magnetic Levitation.",
  "Built LabVIEW block diagram logic for adaptive LED brightness based on ambient light response.",
  "Developed a real-time sign language recognition solution using computer vision and gesture interpretation.",
  "Engineered embedded safety logic for Smart Miner Helmet operational behavior.",
];

const experience = [
  {
    role: "Electromechanical Engineering Intern",
    company: "China Communications Construction Company Limited (CCCC)",
    period: "June 11, 2025 - August 11, 2025",
    detail:
      "Two-month summer placement focused on practical site and systems exposure, engineering coordination, and applied technical problem solving.",
  },
];

function About() {
  return (
    <section id="about" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="glass-card rounded-3xl border border-white/10 p-7 sm:p-10"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-muted">About Me</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">ENGINEERING HARDWARE + SOFTWARE AS ONE SYSTEM</h2>
          <p className="mt-5 max-w-4xl leading-relaxed text-muted">
            I am an Electromechanical Engineer focused on building systems that are technically sound, production
            conscious, and user oriented. My workflow spans concept design, simulation, prototyping, integration, and
            deployment. I treat mechanical, electrical, and software layers as one architecture, not separate tasks.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="glass-card rounded-3xl border border-white/10 p-7"
          >
            <h3 className="font-display text-2xl">Core Strengths</h3>
            <ul className="mt-5 space-y-3">
              {coreSkills.map((skill) => (
                <li key={skill} className="flex items-start gap-3 text-sm text-muted sm:text-base">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="glass-card rounded-3xl border border-white/10 p-7"
          >
            <h3 className="font-display text-2xl">Signature Contributions</h3>
            <ul className="mt-5 space-y-3">
              {signatureWins.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted sm:text-base">
                  <span className="mt-2 h-2 w-2 rounded-full bg-accentSecondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="glass-card rounded-3xl border border-white/10 p-7"
        >
          <h3 className="font-display text-2xl">Work Experience</h3>
          <div className="mt-5 space-y-4">
            {experience.map((item) => (
              <div key={`${item.company}-${item.period}`} className="rounded-2xl border border-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">{item.period}</p>
                <h4 className="mt-2 font-display text-lg">{item.role}</h4>
                <p className="text-sm text-accent">{item.company}</p>
                <p className="mt-2 text-sm text-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default About;
