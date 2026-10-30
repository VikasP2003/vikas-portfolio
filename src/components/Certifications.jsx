import { Award } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <SectionTitle eyebrow="Credentials" title="Certifications" description="Professional learning and industry-recognized credentials." />
      <div className="cert-grid">
        {certifications.map((cert) => (
          <article className="cert-card reveal" key={cert.code}>
            <div className="cert-icon"><Award size={23}/></div>
            <div><h3>{cert.name}</h3><p>{cert.code} · {cert.status}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}