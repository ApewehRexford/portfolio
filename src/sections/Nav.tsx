import statusDot from "../assets/status-dot.svg";
import { navLinks } from "../content";

export default function Nav() {
  return (
    <header className="nav container" id="top">
      <a href="#top" className="nav__name">
        Apeweh Rexford Awaregya
      </a>
      <nav className="nav__links mono" aria-label="Primary">
        {navLinks.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </nav>
      <a href="#contact" className="status-pill mono">
        <img src={statusDot} width={8} height={8} alt="" />
        Open to AI/ML &amp; SWE roles
      </a>
    </header>
  );
}
