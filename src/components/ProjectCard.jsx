import { motion } from "framer-motion";

function ProjectCard({ project, onOpen }) {
  const previewImage = project.images[0];
  const handleOpen = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onOpen(project);
  };

  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="glass-card neon-border group h-full overflow-hidden rounded-3xl border border-white/10 shadow-soft"
    >
      <div className="flex h-full w-full flex-col text-left">
        {previewImage ? (
          <button type="button" onClick={handleOpen} className="overflow-hidden text-left">
            <img
              src={previewImage}
              alt={`${project.title} preview`}
              loading="lazy"
              className="aspect-video w-full bg-black/20 object-contain p-1 transition duration-500 group-hover:scale-[1.02]"
            />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleOpen}
            className="flex aspect-video items-center justify-center bg-gradient-to-br from-accent/20 to-accentSecondary/20 text-left"
          >
            <span className="font-display text-sm uppercase tracking-[0.2em] text-muted">Project Overview</span>
          </button>
        )}

        <div className="flex h-full flex-col space-y-4 p-5">
          <div>
            <h3 className="font-display text-xl">{project.title}</h3>
            <p className="mt-3 text-sm text-muted">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span key={tech} className="rounded-full border border-accent/40 px-2.5 py-1 text-xs text-fg">
                {tech}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={handleOpen}
            className="mt-auto inline-flex w-fit rounded-full border border-accent/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent transition hover:bg-accent/10"
          >
            Open Case Study
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
