import { BriefcaseBusiness } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <SectionTitle eyebrow="Career" title="Experience" description="Building reporting and business intelligence solutions." />
      <article className="experience-card reveal">
        <div className="experience-icon"><BriefcaseBusiness size={21}/></div>
        <div className="experience-content">
          <div className="experience-top">
            <div><h3>{experience.company}</h3><p>{experience.role}</p></div>
            <span className="period">{experience.period}</span>
          </div>
          <ul>{experience.points.map((point) => <li key={point}>{point}</li>)}</ul>
        </div>
      </article>
    </section>
  );
}