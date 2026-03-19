import { motion } from "framer-motion";

function ProjectCard({ project, onOpen }) {
  const previewImage = Array.isArray(project.images) && project.images.length > 0 ? project.images[0] : "";
  const caseStudy = project.caseStudy || {};

  const handleOpen = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onOpen(project);
  };

  return (
    <motion.article
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-[var(--card-color)] shadow-soft backdrop-blur-xl transition duration-300 hover:shadow-glow"
    >
      <div className="flex h-full w-full flex-col text-left">
        {previewImage ? (
          <button type="button" onClick={handleOpen} className="overflow-hidden text-left">
            <img
              src={previewImage}
              alt={`${project.title} preview`}
              loading="lazy"
              className="aspect-video w-full bg-black/20 object-cover transition duration-500 group-hover:scale-105"
            />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleOpen}
            className="flex aspect-video items-center justify-center bg-gradient-to-br from-accent/15 to-accentSecondary/15 text-left"
          >
            <div className="text-center">
              <p className="font-display text-sm uppercase tracking-[0.2em] text-muted">Project Overview</p>
              <p className="mt-2 text-xs text-muted">Detailed case study available</p>
            </div>
          </button>
        )}

        <div className="flex h-full flex-col space-y-4 p-5">
          <div>
            <h3 className="font-display text-xl">{project.title}</h3>
            <p className="mt-3 text-sm text-muted">{project.description}</p>
            {caseStudy.goal ? <p className="mt-3 text-xs text-muted">Goal: {caseStudy.goal}</p> : null}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span key={tech} className="rounded-full border border-accent/35 px-2.5 py-1 text-xs text-fg">
                {tech}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={handleOpen}
            className="mt-auto inline-flex w-fit rounded-full border border-accent/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent transition duration-300 hover:bg-accent/10"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
