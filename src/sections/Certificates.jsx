import { motion } from "framer-motion";
import CertificateCard from "../components/CertificateCard";

function Certificates({ certificates, onOpenCertificate, theme }) {
  return (
    <section id="certificates" className="px-4 pb-20 pt-16 sm:pb-24 sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-muted">Documents</p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">CERTIFICATES & VERIFIED TRAINING</h2>
          <p className="mt-4 max-w-3xl text-sm text-muted sm:text-base">
            Open each certificate in an embedded viewer or directly in a new tab.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.path}
              certificate={certificate}
              onOpen={onOpenCertificate}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
