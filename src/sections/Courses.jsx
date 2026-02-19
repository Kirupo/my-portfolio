import { motion } from "framer-motion";
import CourseCard from "../components/CourseCard";

function Courses({ courses }) {
  return (
    <section id="courses" className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Courses & Learning</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">WHERE I BUILD AND REFRESH MY SKILLS</h2>
          <p className="mt-4 max-w-3xl text-sm text-muted sm:text-base">
            Continuous learning is a core part of my engineering process. These courses support my applied work in
            embedded systems, controls, and software.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={`${course.platform}-${course.title}`} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
