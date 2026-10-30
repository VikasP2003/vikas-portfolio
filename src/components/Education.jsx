import { GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section className="section" id="education">
      <SectionTitle eyebrow="Education" title="Academic Background" description="Academic foundation in computer applications." />
      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card reveal" key={item.degree}>
            <div className="education-icon"><GraduationCap size={22}/></div>
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            <span>{[item.status, item.period].filter(Boolean).join(" · ")}</span>
          </article>
        ))}
      </div>
    </section>
  );
}