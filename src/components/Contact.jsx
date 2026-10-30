import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="contact-panel reveal">
        <SectionTitle eyebrow="Let's connect" title="Get In Touch" description="Interested in data analytics opportunities, collaboration or a conversation? Feel free to reach out." />
        <div className="contact-links">
          <a href={`mailto:${profile.email}`}><Mail size={17}/> {profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a>
          <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a>
        </div>
      </div>
    </section>
  );
}