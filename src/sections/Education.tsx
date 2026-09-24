import { useLightbox } from "../components/Lightbox";
import { education } from "../content";

export default function Education() {
  const { show, lightbox } = useLightbox();

  return (
    <section className="education container">
      <p className="mono muted">Education &amp; certifications</p>
      <div className="cards cards--4">
        {education.map((e) => {
          const front = (
            <div className="card card--sand education__card">
              <p className="mono accent label-sm">{e.date}</p>
              <p className="education__title serif">{e.title}</p>
              <p className="muted">{e.sub}</p>
              {e.certificate && <p className="education__hint mono label-xs">View certificate ↻</p>}
            </div>
          );

          if (!e.certificate) return <div key={e.title}>{front}</div>;

          const cert = { src: e.certificate, alt: `${e.title} certificate — ${e.sub}` };
          return (
            <button
              key={e.title}
              type="button"
              className="flip"
              onClick={() => show(cert)}
              aria-label={`View certificate: ${e.title}`}
            >
              <span className="flip__inner">
                <span className="flip__face">{front}</span>
                <span className="flip__face flip__back">
                  <img src={cert.src} alt={cert.alt} loading="lazy" />
                </span>
              </span>
            </button>
          );
        })}
      </div>
      {lightbox}
    </section>
  );
}
