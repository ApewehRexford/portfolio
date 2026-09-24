import { workIndex } from "../content";

export default function WorkIndex() {
  return (
    <section className="work container" id="work">
      <div className="section-head">
        <h2 className="display-lg serif">
          Selected <em>work</em>
        </h2>
        <p className="mono muted">(04)&nbsp;&nbsp;Projects · 2024 — 2026</p>
      </div>
      <ol className="work__rows">
        {workIndex.map((row) => (
          <li key={row.num}>
            <a href={row.href} className="work__row">
              <span className="work__num mono accent">{row.num}</span>
              <span className="work__title serif">{row.title}</span>
              <span className="work__desc">{row.desc}</span>
              <span className="work__tags mono">{row.tags}</span>
              <span className="work__arrow" aria-hidden>
                ↗
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
