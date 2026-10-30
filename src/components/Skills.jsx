import SectionTitle from "./SectionTitle";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <SectionTitle eyebrow="Expertise" title="Skills & Technologies" description="A focused toolkit for business intelligence, data analysis and reporting." />
      <div className="skill-groups">
        {skills.map((group) => (
          <div className="skill-group reveal" key={group.group}>
            <h3>{group.group}</h3>
            <div className="skill-list">{group.items.map((skill) => <span className="skill-pill" key={skill}>{skill}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}