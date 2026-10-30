
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="section hero" id="about">

      {/* Hero Content */}
      <div className="hero-copy">

        <div className="availability">
          <span className="pulse-dot" />
          Data Analyst · {profile.location}
        </div>

        <h1>
          {profile.firstName}
          <span>{profile.lastName}.</span>
        </h1>

        <p className="hero-role">
          <strong>{profile.role}</strong> — Turning data into meaningful decisions
        </p>

        <p className="hero-description">
          {profile.summary}
        </p>

        {/* Action Buttons */}
        <div className="button-row">

          <a className="button primary" href={`mailto:${profile.email}`}>
            <Mail size={16} /> Get in touch
          </a>

          <a
            className="button secondary"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} />
          </a>

          <a
            className="button secondary"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> GitHub <ArrowUpRight size={14} />
          </a>

        </div>

        {/* Hero Statistics */}
        <div className="hero-stats">

          <div>
            <strong>1+ Year</strong>
            <span>TCS Experience</span>
          </div>

          <div>
            <strong>25%</strong>
            <span>Effort Reduced</span>
          </div>

          <div>
            <strong>4+</strong>
            <span>Portfolio Projects</span>
          </div>

          <div>
            <strong>PL-300</strong>
            <span>Microsoft Certified</span>
          </div>

        </div>

      </div>

      {/* Profile Card */}
      <aside className="profile-card">

        <div className="avatar">
          <img
            src="/profile.jpeg"
            alt="Vikas Patil"
            className="profile-image"
          />
        </div>

        <h3>Vikas Patil</h3>
        <p>Data Analyst</p>

        <div className="profile-location">
          <MapPin size={14} /> {profile.location}
        </div>

        <div className="profile-links">

          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={15} /> LinkedIn profile
          </a>

          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={15} /> GitHub projects
          </a>

        </div>

      </aside>

    </section>
  );
}
