import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

function Projects({ projects, onOpenProject }) {
  return (
    <section id="projects" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Projects</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">Engineering Case Studies</h2>
          <p className="mt-4 max-w-3xl text-sm text-muted sm:text-base">
            End-to-end projects spanning computer vision, embedded systems, control engineering, and mechanical
            prototyping.
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-accent">
            Open any project to see full system architecture, workflow, and outcomes.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={onOpenProject} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
