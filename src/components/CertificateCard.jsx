import { motion } from "framer-motion";

function CertificateCard({ certificate, onOpen, theme }) {
  const handleOpen = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onOpen(certificate);
  };

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className={`rounded-3xl border p-5 transition ${
        theme === "dark"
          ? "glass-card border-accent/30 shadow-glow"
          : "bg-white border-slate-200 shadow-soft"
      }`}
    >
      <p className="mb-2 text-xs uppercase tracking-[0.22em] text-muted">Certificate</p>
      <h3 className="font-display text-xl">{certificate.title}</h3>
      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-accent">{certificate.provider}</p>
      <p className="mt-3 text-sm text-muted">{certificate.focus}</p>

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
          Open PDF
        </a>
      </div>
    </motion.article>
  );
}

export default CertificateCard;
