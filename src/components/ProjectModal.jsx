import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";

function DetailBlock({ title, content }) {
  if (!content || (Array.isArray(content) && content.length === 0)) return null;

  return (
    <section className="rounded-2xl border border-white/10 bg-black/15 p-4">
      <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{title}</h4>
      {Array.isArray(content) ? (
        <ul className="space-y-2">
          {content.map((line) => (
            <li key={line} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted">{content}</p>
      )}
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  const imageInsights = project ? project.imageInsights || [] : [];
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (!project) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/10 bg-[var(--card-color)] p-6 shadow-soft sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted">Project Case Study</p>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl">{project.title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] hover:border-accent"
                aria-label="Close modal"
              >
                Close
              </button>
            </div>

            <div className="mb-4 rounded-2xl border border-white/10 bg-black/15 p-4">
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Project Summary</h4>
              <p className="text-sm leading-relaxed text-muted">{project.description}</p>
            </div>

            <div className="mb-6">
              {project.images.length === 0 ? (
                <div className="flex h-[46vh] min-h-[240px] items-center justify-center rounded-3xl bg-gradient-to-br from-accent/20 to-accentSecondary/20">
                  <p className="text-sm tracking-wide text-muted">No project image supplied</p>
                </div>
              ) : project.images.length === 1 ? (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  loading="lazy"
                  className="h-[46vh] min-h-[260px] w-full rounded-3xl bg-black/25 object-contain p-2"
                />
              ) : (
                <ImageCarousel images={project.images} title={project.title} />
              )}
            </div>

            {project.images.length > 0 && imageInsights.length > 0 ? (
              <div className="mb-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Design Interpretation by Image
                </h4>
                <ul className="space-y-2">
                  {imageInsights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mb-4">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/20 px-3 py-1 text-xs text-fg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <DetailBlock title="Problem Statement" content={project.problemStatement} />
              <DetailBlock title="Design Intent" content={project.designIntent} />
              <DetailBlock title="Architecture" content={project.architecture} />
              <DetailBlock title="System Used" content={project.systemUsed} />
              <DetailBlock title="Tools and Why" content={project.stackRationale} />
              <DetailBlock title="Build Process" content={project.buildProcess} />
              <DetailBlock title="How It Works" content={project.howItWorks} />
              <DetailBlock title="Challenges and Fixes" content={project.challengesAndFixes} />
            </div>

            {project.impact ? (
              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Outcome / Impact</h4>
                <p className="text-sm text-muted">{project.impact}</p>
              </div>
            ) : null}

            {project.contributionNote ? (
              <div className="mt-4 rounded-2xl border border-accent/30 bg-black/15 p-4">
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Personal Contribution</h4>
                <p className="text-sm text-muted">{project.contributionNote}</p>
              </div>
            ) : null}

            {project.hasCertificate && project.certificatePath ? (
              <div className="mt-5">
                <a
                  href={project.certificatePath}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full border border-accent/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent hover:bg-accent/10"
                >
                  Open Related Document
                </a>
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default ProjectModal;
