import { certificates } from "../data/data";
import CertificateCard from "./CertificateCard";
import Container from "./Container";
import Title from "./Title";

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
