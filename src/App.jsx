import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Background3D from "./components/Background3D";
import CertificateViewer from "./components/CertificateViewer";
import ProjectModal from "./components/ProjectModal";
import ThemeToggle from "./components/ThemeToggle";
import useTheme from "./hooks/useTheme";
import certificates from "./data/certificates.json";
import experience from "./data/experience.json";
import projects from "./data/projects.json";
import About from "./sections/About";
import Certificates from "./sections/Certificates";
import Hero from "./sections/Hero";
import ProfessionalSnapshot from "./sections/ProfessionalSnapshot";
import Projects from "./sections/Projects";
import Teaching from "./sections/Teaching";
import WorkExperience from "./sections/WorkExperience";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#teaching", label: "Teaching" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeCertificate, setActiveCertificate] = useState(null);
  const { theme, isDark, toggleTheme } = useTheme();

  const isModalOpen = useMemo(
    () => Boolean(activeProject) || Boolean(activeCertificate),
    [activeProject, activeCertificate],
  );

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--bg-color)] text-fg transition-colors duration-300">
      <Background3D theme={theme} />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[var(--bg-color)]/75 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#hero" className="font-display text-sm uppercase tracking-[0.24em] sm:text-base">
            Kirubel Girma
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-[0.22em] text-muted transition hover:text-fg"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#projects"
              className="hidden rounded-full border border-accent/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-accent transition hover:bg-accent/10 sm:inline-flex"
            >
              View Work
            </a>
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <Hero />
        <ProfessionalSnapshot />
        <About />
        <WorkExperience experience={experience} />
        <Teaching />
        <Projects projects={projects} onOpenProject={setActiveProject} />
        <Certificates certificates={certificates} onOpenCertificate={setActiveCertificate} />

        <section id="contact" className="px-4 pb-20 sm:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-[var(--card-color)] p-7 text-center shadow-soft backdrop-blur-xl sm:p-10"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-muted">Contact</p>
            <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl leading-tight sm:text-5xl">
              READY TO ENGINEER PRACTICAL SYSTEMS
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm text-muted sm:text-base">
              Let&apos;s build reliable hardware-software products from concept to deployment.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://www.linkedin.com/in/kirubel-girma-9a0586259/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-[var(--accent-color)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-black transition hover:opacity-90"
              >
                Hire Me
              </a>
              <a
                href="https://github.com/Kirupo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-accent/50 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-accent transition hover:bg-accent/10"
              >
                GitHub
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
              <a
                href="mailto:kirubelg217@gmail.com"
                className="rounded-full border border-white/15 px-4 py-2 text-muted transition hover:text-fg"
              >
                kirubelg217@gmail.com
              </a>
              <a
                href="tel:+251947402948"
                className="rounded-full border border-white/15 px-4 py-2 text-muted transition hover:text-fg"
              >
                +251947402948
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-4 py-8 text-center text-sm text-muted">
        <p>Kirubel Girma | Electromechanical Engineer | Embedded & Software Systems</p>
      </footer>

      {activeProject ? <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} /> : null}
      {activeCertificate ? (
        <CertificateViewer
          certificate={activeCertificate}
          onClose={() => setActiveCertificate(null)}
          isDark={isDark}
        />
      ) : null}
    </div>
  );
}

export default App;
