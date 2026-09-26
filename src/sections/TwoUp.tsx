import { twoUp } from "../content";

export default function TwoUp() {
  return (
    <section className="two-up container">
      {twoUp.map((p) => {
        // Read the image without narrowing `p`, so entries with or without one both type-check.
        const image: string | undefined = "image" in p ? p.image : undefined;
        return (
          <article key={p.id} id={p.id} className="two-up__item">
            <div className={`media two-up__media ${image ? "two-up__media--shot" : "media--sand"}`}>
              {image ? (
                <img src={image} alt={`${p.title} — ${p.media}`} loading="lazy" />
              ) : (
                <span className="mono">{p.media}</span>
              )}
            </div>
            <div className="two-up__meta mono label-sm">
              <p className="accent">{p.kicker}</p>
              <a href={p.repo} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
            <h3 className="two-up__title serif">{p.title}</h3>
            <p className="two-up__desc muted">{p.desc}</p>
            <p className="mono label-sm">{p.tags}</p>
          </article>
        );
      })}
    </section>
  );
}
