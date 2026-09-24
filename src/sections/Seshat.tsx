import Gallery from "../components/Gallery";
import { seshat } from "../content";

export default function Seshat() {
  return (
    <section className="case container" id="seshat">
      <div className="case__meta mono">
        <p className="accent">01 — Client project</p>
        <p className="muted">Multisoft Solutions Ltd · 2026</p>
      </div>
      <div className="case__title-row">
        <h2 className="case__title serif">Seshat</h2>
        <p className="case__lede seshat__lede">
          A single ledger for every company asset — replacing screenshots, email threads, and
          WhatsApp messages across four company entities.
        </p>
      </div>
      <Gallery shots={seshat.screenshots} caption="App screenshots · mockup data" />
      <div className="seshat__details">
        <dl className="seshat__facts">
          {seshat.meta.map((m) => (
            <div key={m.label}>
              <dt className="mono muted label-sm">{m.label}</dt>
              <dd>{m.value}</dd>
            </div>
          ))}
        </dl>
        <div className="seshat__narrative">
          <div className="seshat__problem">
            <h3 className="serif h3">The problem</h3>
            <p>
              Multisoft tracked equipment through screenshots, email threads, and WhatsApp.
              Management couldn’t reliably say which of its four entities owned an asset or who
              held it — and hardware disappeared when staff left.
            </p>
          </div>
          <div>
            <h3 className="serif h3 accent">
              <em>What I owned</em>
            </h3>
            <ol className="seshat__owned">
              {seshat.owned.map((o, i) => (
                <li key={o.title}>
                  <span className="mono accent">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="seshat__owned-title">{o.title}</p>
                    <p className="muted">{o.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="stack-sm">
        <p className="mono muted">Project outcomes at handoff</p>
        <div className="outcomes">
          {seshat.outcomes.map((o, i) => (
            <div key={o.value}>
              <p className={`outcomes__value serif${i === 0 ? " accent" : ""}`}>{o.value}</p>
              <p className="muted">{o.caption}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="stack-md">
        <p className="mono muted">Key architecture decisions — team</p>
        <div className="cards cards--3">
          {seshat.decisions.map((d) => (
            <div key={d.title} className="card card--sand">
              <p className="card__title serif">{d.title}</p>
              <p className="muted">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
