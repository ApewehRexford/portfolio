import { stack } from "../content";

export default function Stack() {
  return (
    <section className="dark" id="stack">
      <div className="container tools">
        <div className="section-head">
          <h2 className="tools__title serif">
            Tools <em className="accent">I reach for</em>
          </h2>
          <p className="mono muted-dark">(06)&nbsp;&nbsp;Disciplines</p>
        </div>
        <div className="tools__grid">
          {stack.map((group) => (
            <div key={group.label}>
              <p className="mono accent label-sm">{group.label}</p>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
