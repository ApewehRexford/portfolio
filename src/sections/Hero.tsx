import { links, nowRow } from "../content";

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero__meta mono muted">
        <p>(Portfolio — 2026)</p>
        <p>BSc Computer Science · University of Ghana · 2028</p>
      </div>
      <div className="hero__main">
        <h1 className="hero__name serif">
          Apeweh
          <br />
          Rexford
          <br />
          <em className="accent">Awaregya.</em>
        </h1>
        <div className="hero__intro">
          <div className="portrait">
            <div className="portrait__img">
              <img src="/portrait.jpg" alt="Apeweh Rexford Awaregya" width={260} height={260} />
            </div>
          </div>
          <p className="hero__lede">
            I build software at the intersection of AI, computer vision, and product design —
            from gesture-driven web apps to desktop systems shipped for real clients.
          </p>
          <div className="hero__ctas">
            <a href="#work" className="btn btn--solid">
              View selected work&nbsp;&nbsp;→
            </a>
            <a href={links.cv} className="btn btn--outline hero__cv" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
      <hr className="rule" />
      <div className="hero__now">
        {nowRow.map((item) => (
          <div key={item.label}>
            <p className="mono accent label-sm">{item.label}</p>
            <p className="hero__now-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
