import { motion } from "framer-motion";

function CourseCard({ course }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="glass-card rounded-3xl border border-white/10 p-5 shadow-soft"
    >
      <div className="mb-5 flex items-center gap-3">
        <img src={course.icon} alt={`${course.platform} icon`} loading="lazy" className="h-8 w-8 rounded-md" />
        <p className="text-xs uppercase tracking-[0.2em] text-muted">{course.platform}</p>
      </div>

      <h3 className="font-display text-lg leading-tight">{course.title}</h3>
      <p className="mt-2 text-sm text-muted">{course.date}</p>

      <a
        href={course.link}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex rounded-full border border-accent/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent transition hover:bg-accent/10"
      >
        View Course
      </a>
    </motion.article>
  );
}

export default CourseCard;
