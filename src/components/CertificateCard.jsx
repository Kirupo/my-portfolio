import { motion } from "framer-motion";

function CertificateCard({ certificate, onOpen }) {
  const handleOpen = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onOpen(certificate);
  };

  return (
    <motion.article
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-white/10 bg-[var(--card-color)] p-5 shadow-soft backdrop-blur-xl transition duration-300 hover:shadow-glow"
    >
      <p className="mb-2 text-xs uppercase tracking-[0.22em] text-muted">Certificate</p>
      <h3 className="font-display text-xl">{certificate.title}</h3>
      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-accent">{certificate.issuer}</p>
      <p className="mt-3 text-sm text-muted">{certificate.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={handleOpen}
          className="rounded-full border border-accent/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent transition hover:bg-accent/10"
        >
          View Details
        </button>
        <a
          href={certificate.path}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-fg transition hover:border-accent"
        >
          Open Document
        </a>
      </div>
    </motion.article>
  );
}

export default CertificateCard;
