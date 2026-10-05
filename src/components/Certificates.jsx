import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";
import { certificates } from "../data/data";
import Container from "./Container";
import Title from "./Title";

function CertificateCard({ certificate, index }) {
  return (
    <motion.article
      className="card flex h-full flex-col overflow-hidden p-0"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
    >
      {certificate.image ? (
        <img
          src={certificate.image}
          alt={`${certificate.title} certificate`}
          loading="lazy"
          className="aspect-16/10 w-full object-cover"
        />
      ) : (
        <div className="grid aspect-16/10 place-items-center bg-linear-to-br from-ac/20 via-card to-ac2/20">
          <FiAward className="text-5xl text-ac" aria-hidden="true" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold text-main">{certificate.title}</h3>
        <p className="mt-2 text-sm text-mu">{certificate.issuer}</p>
        {certificate.date && <p className="mt-1 text-xs text-mu">{certificate.date}</p>}
        {certificate.description && <p className="mt-2 text-sm text-mu">{certificate.description}</p>}
        {certificate.url && (
          <a
            className="mt-auto inline-flex items-center gap-2 pt-4 text-sm text-ac hover:underline"
            href={certificate.url}
            target="_blank"
            rel="noreferrer"
          >
            View certificate <FiExternalLink aria-hidden="true" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <Container>
        <Title title="Certificates" sub="Courses, credentials, and achievements" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <CertificateCard key={certificate.id || certificate.title} certificate={certificate} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
