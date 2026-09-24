import Gallery from "../components/Gallery";
import { fordklyn } from "../content";

export default function Fordklyn() {
  return (
    <section className="dark" id="fordklyn">
      <div className="case container">
        <div className="case__meta mono">
          <p className="accent">02 — A Xylovt project</p>
          <p className="muted-dark">For a family-owned apartment property</p>
        </div>
        <div className="case__title-row">
          <h2 className="case__title fordklyn__title serif">
            Fordklyn <em className="accent">TMS</em>
          </h2>
          <p className="case__lede fordklyn__lede">
            A tenant and lease ledger the owners install like any other program. No server, no
            network, no setup — their data lives in one file.
          </p>
        </div>
        <div className="before-after">
          <div className="before-after__v1">
            <p className="mono">v1 — Self-hosted web app</p>
            <p className="serif">
              PostgreSQL install. Firewall rules. Static IP. A Windows service to keep alive.
            </p>
          </div>
          <div className="before-after__v2">
            <p className="mono">v2 — Offline desktop app</p>
            <p className="serif">
              One installer.
              <br />
              One file.
              <br />
              Zero infrastructure.
            </p>
          </div>
        </div>
        <p className="fordklyn__note muted-dark">
          The first version worked — but it asked non-technical owners to run infrastructure. I
          rebuilt it around how they actually use it.
        </p>
        <Gallery
          shots={fordklyn.screenshots}
          caption="App screenshots · dummy tenant data"
          captionClass="muted-dark"
        />
        <div className="fordklyn__decisions">
          {fordklyn.decisions.map((d, i) => (
            <div key={d.title}>
              <p className="mono accent label-sm">{String(i + 1).padStart(2, "0")}</p>
              <p className="fordklyn__decision-title">{d.title}</p>
              <p className="muted-dark">{d.body}</p>
            </div>
          ))}
        </div>
        <p className="mono">{fordklyn.stack}</p>
      </div>
    </section>
  );
}
