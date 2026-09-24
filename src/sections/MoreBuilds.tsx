import { links, moreBuilds } from "../content";

export default function MoreBuilds() {
  return (
    <section className="more container">
      <div className="section-head">
        <h2 className="more__title serif">
          More <em>builds</em>
        </h2>
        <a href={links.github} target="_blank" rel="noreferrer" className="mono label-sm">
          All repos on GitHub ↗
        </a>
      </div>
      <div className="cards cards--3">
        {moreBuilds.map((b) => (
          <div key={b.title} className="card card--outline">
            <p className="card__title serif">{b.title}</p>
            <p className="muted card__body-sm">{b.desc}</p>
            <p className="mono label-xs">{b.tags}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
