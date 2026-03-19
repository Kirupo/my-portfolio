import { useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

function CertificateViewer({ certificate, onClose, isDark }) {
  const layoutPlugin = useMemo(() => defaultLayoutPlugin(), []);
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (!certificate) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-3 backdrop-blur-md sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label={`${certificate.title} certificate`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className="flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/15 bg-[var(--card-color)]"
          >
            <div className="border-b border-white/10 px-4 py-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">Certificate Details</p>
                  <h3 className="mt-1 font-display text-xl">{certificate.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-accent">{certificate.issuer}</p>
                  {certificate.issuedDate ? (
                    <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted">
                      Issued {certificate.issuedDate}
                    </p>
                  ) : null}
                </div>
                <div className="flex gap-2">
                  <a
                    href={certificate.path}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-accent/45 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-accent hover:bg-accent/10"
                  >
                    Open PDF
                  </a>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full border border-white/25 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] hover:border-accent"
                  >
                    Close
                  </button>
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-white/10 bg-black/15 p-3">
                <p className="text-[11px] uppercase tracking-[0.15em] text-accent">What It Covers</p>
                <p className="mt-2 text-sm text-muted">{certificate.whatItCovers}</p>
              </div>

              {Array.isArray(certificate.skillsValidated) && certificate.skillsValidated.length > 0 ? (
                <div className="mt-3 rounded-xl border border-white/10 bg-black/15 p-3">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-accent">Skills Validated</p>
                  <ul className="mt-2 space-y-1.5">
                    {certificate.skillsValidated.map((skill) => (
                      <li key={skill} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {Array.isArray(certificate.appliedIn) && certificate.appliedIn.length > 0 ? (
                <div className="mt-3 rounded-xl border border-white/10 bg-black/15 p-3">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-accent">Applied In</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {certificate.appliedIn.map((item) => (
                      <span key={item} className="rounded-full border border-accent/35 px-3 py-1 text-xs text-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div className="min-h-0 flex-1 overflow-hidden">
              <Worker workerUrl="/pdf.worker.min.js">
                <Viewer
                  fileUrl={certificate.path}
                  theme={isDark ? "dark" : "light"}
                  plugins={[layoutPlugin]}
                  defaultScale="PageFit"
                />
              </Worker>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default CertificateViewer;
