import { useLightbox } from "../components/Lightbox";
import { honors } from "../content";

export default function Honors() {
  const { show, lightbox } = useLightbox();

  return (
    <section className="honors" id="honors">
      <div className="container honors__inner">
        <div className="honors__head">
          <h2 className="honors__title serif">
            Built to
            <br />
            <em>compete.</em>
          </h2>
          <p className="honors__lede">
            From robotics arenas to climate tech — I build with teams that compete, and ship
            something real under a deadline.
          </p>
        </div>
        {honors.map((h) => (
          <div key={h.title} className="honors__item">
            <div className="honors__left">
              <p className="mono label-sm honors__soft">{h.date}</p>
              <p className="honors__award serif">{h.title}</p>
            </div>
            <div className="honors__right">
              <p className="honors__body">{h.body}</p>
              <p className="mono label-sm honors__soft">{h.tags}</p>
              <div className="honors__thumbs">
                {[0, 1, 2].map((i) => {
                  const photo = h.photos?.[i];
                  return photo ? (
                    <button
                      key={i}
                      type="button"
                      className="honors__thumb honors__thumb--photo"
                      onClick={() => show(photo)}
                      aria-label={`Enlarge photo: ${photo.alt}`}
                    >
                      <img src={photo.src} alt={photo.alt} loading="lazy" />
                    </button>
                  ) : (
                    <div key={i} className="honors__thumb">
                      <span className="mono">{h.thumb}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
      {lightbox}
    </section>
  );
}
