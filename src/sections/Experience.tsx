import { experience } from "../content";

export default function Experience() {
  return (
    <section className="experience container" id="experience">
      <div className="section-head">
        <h2 className="display-lg serif">Experience</h2>
        <p className="mono muted">(06)&nbsp;&nbsp;2023 — Present</p>
      </div>
      <ol className="experience__rows">
        {experience.map((e) => (
          <li key={e.role} className="experience__row">
            <p className="experience__date mono accent label-sm">{e.date}</p>
            <div className="experience__role">
              <p className="serif">{e.role}</p>
              <p>{e.org}</p>
            </div>
            <p className="experience__desc muted">{e.desc}</p>
            <p className="experience__loc mono muted label-sm">{e.location}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
