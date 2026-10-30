import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const links = ["About", "Skills", "Experience", "Projects", "Certifications", "Education", "Contact"];

  return (
    <nav className="navbar">
      <a className="logo" href="#about" onClick={() => setOpen(false)}>VP<span>.</span></a>
      <div className={`nav-links ${open ? "open" : ""}`}>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>
        ))}
      </div>
      <div className="nav-actions">
        <button className="icon-btn" aria-label="Toggle color theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </button>
        <button className="icon-btn menu-btn" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
    </nav>
  );
}