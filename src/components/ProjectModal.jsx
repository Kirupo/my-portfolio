import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";

function DetailPanel({ title, content }) {
  if (!content || (Array.isArray(content) && content.length === 0)) return null;

  const isList = Array.isArray(content);
  return (
    <article className="rounded-2xl border border-white/10 bg-black/10 p-4">
      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{title}</h4>
      {isList ? (
        <ul className="mt-3 space-y-2.5">
          {content.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm leading-relaxed text-muted">{content}</p>
      )}
    </article>
  );
}

function ProjectModal({ project, onClose }) {
  const images = Array.isArray(project?.images) ? project.images : [];
  const techStack = Array.isArray(project?.techStack) ? project.techStack : [];
  const caseStudy = project?.caseStudy || {};

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) onClose();
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
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/10 bg-[var(--card-color)] p-6 shadow-soft backdrop-blur-xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted">Project Details</p>
                <h3 className="mt-2 font-display text-2xl sm:text-3xl">{project.title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] hover:border-accent"
              >
                Close
              </button>
            </div>

            <div className="mb-6">
              {images.length === 0 ? (
                <div className="flex h-[42vh] min-h-[220px] items-center justify-center rounded-2xl bg-gradient-to-br from-accent/15 to-accentSecondary/15">
                  <div className="max-w-md px-6 text-center">
                    <p className="font-display text-sm uppercase tracking-[0.2em] text-fg">Visual Placeholder</p>
                    <p className="mt-2 text-sm text-muted">
                      Dedicated project visuals will be added here. Technical case study details are fully available.
                    </p>
                  </div>
                </div>
              ) : images.length === 1 ? (
                <img
                  src={images[0]}
                  alt={project.title}
                  loading="lazy"
                  className="h-[42vh] min-h-[240px] w-full rounded-2xl bg-black/20 object-contain p-2"
                />
              ) : (
                <ImageCarousel images={images} title={project.title} />
              )}
            </div>

            <DetailPanel title="Project Summary" content={project.description} />

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/10 p-4">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span key={tech} className="rounded-full border border-accent/40 px-3 py-1 text-xs text-fg">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <DetailPanel title="Problem" content={caseStudy.problem} />
              <DetailPanel title="Goal" content={caseStudy.goal} />
              <DetailPanel title="System Architecture" content={caseStudy.systemArchitecture} />
              <DetailPanel title="Tools and Software" content={caseStudy.toolsAndSoftware} />
              <DetailPanel title="Workflow" content={caseStudy.workflow} />
              <DetailPanel title="Results" content={caseStudy.results} />
            </div>

            <DetailPanel title="Image Notes" content={caseStudy.imageNotes} />

            {project.contributionNote ? (
              <div className="mt-5 rounded-2xl border border-accent/30 bg-black/10 p-4">
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contribution Note</h4>
                <p className="mt-3 text-sm text-muted">{project.contributionNote}</p>
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default ProjectModal;
