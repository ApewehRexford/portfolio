import { links } from "../content";

export default function Contact() {
  return (
    <footer className="contact container" id="contact">
      <p className="mono accent">(07)&nbsp;&nbsp;Contact</p>
      <h2 className="contact__title serif">
        Let’s build
        <br />
        <em className="accent">something.</em>
      </h2>
      <div className="contact__row">
        <div className="contact__email">
          <p className="mono muted">Email</p>
          <a href={`mailto:${links.email}`}>{links.email}</a>
        </div>
        <div className="contact__buttons">
          <a href={links.github} target="_blank" rel="noreferrer" className="btn btn--outline btn--sm">
            GitHub ↗
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn btn--outline btn--sm">
            LinkedIn ↗
          </a>
          <a href={links.cv} download={links.cvFileName} className="btn btn--outline btn--sm">
            Download CV ↗
          </a>
        </div>
      </div>
      <div className="contact__foot mono">
        <p className="muted">© 2026 Apeweh Rexford Awaregya</p>
        <p className="muted">Designed in Figma · Built by hand</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
