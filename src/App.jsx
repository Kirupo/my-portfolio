import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Background3D from "./components/Background3D";
import ProjectModal from "./components/ProjectModal";
import CertificateViewer from "./components/CertificateViewer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Courses from "./sections/Courses";
import projects from "./data/projects.json";
import certificates from "./data/certificates.json";
import courses from "./data/courses.json";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#courses", label: "Courses" },
  { href: "#certificates", label: "Certificates" },
];

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeCertificate, setActiveCertificate] = useState(null);

  const isModalOpen = useMemo(
    () => Boolean(activeProject) || Boolean(activeCertificate),
    [activeProject, activeCertificate],
  );

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.dataset.theme = "dark";
  }, []);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--bg-color)] text-fg">
      <Background3D theme="dark" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[var(--bg-color)]/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#hero" className="font-display text-sm uppercase tracking-[0.25em] sm:text-base">
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

          <a
            href="#projects"
            className="hidden rounded-full border border-accent/50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-accent transition hover:bg-accent/10 sm:inline-flex"
          >
            View Work
          </a>
        </div>
      </header>

      <main className="relative z-10 pt-16">
        <Hero />
        <About />
        <Projects projects={projects} onOpenProject={setActiveProject} />
        <Courses courses={courses} />
        <Certificates certificates={certificates} onOpenCertificate={setActiveCertificate} theme="dark" />

        <section className="px-4 pb-20 sm:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-[var(--card-color)] p-7 text-center sm:p-10"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-muted">Let&apos;s Build</p>
            <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl leading-tight sm:text-5xl">
              READY TO ENGINEER PRODUCTS THAT ACTUALLY SHIP
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm text-muted sm:text-base">
              I design with systems thinking, execute with production discipline, and bridge hardware + software
              without compromise.
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
              <a href="mailto:kirubelg217@gmail.com" className="rounded-full border border-white/15 px-4 py-2 text-muted transition hover:text-fg">
                kirubelg217@gmail.com
              </a>
              <a href="tel:+251947402948" className="rounded-full border border-white/15 px-4 py-2 text-muted transition hover:text-fg">
                +251947402948
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-4 py-8 text-center text-sm text-muted">
        <p>Kirubel Girma - Electromechanical Engineer - Embedded & AI Systems Builder</p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
          <a href="mailto:kirubelg217@gmail.com" className="transition hover:text-fg">
            kirubelg217@gmail.com
          </a>
          <span className="text-white/30">|</span>
          <a href="tel:+251947402948" className="transition hover:text-fg">
            +251947402948
          </a>
          <span className="text-white/30">|</span>
          <a href="https://github.com/Kirupo" target="_blank" rel="noreferrer" className="transition hover:text-fg">
            github.com/Kirupo
          </a>
        </div>
      </footer>

      {activeProject ? <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} /> : null}
      {activeCertificate ? (
        <CertificateViewer certificate={activeCertificate} onClose={() => setActiveCertificate(null)} theme="dark" />
      ) : null}
    </div>
  );
}

export default App;
