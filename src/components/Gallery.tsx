import { useLightbox, type Photo } from "./Lightbox";

// First screenshot shown large, the rest two-up below. Nothing is cropped; click to enlarge.
export default function Gallery({
  shots,
  caption,
  captionClass = "muted",
}: {
  shots: Photo[];
  caption: string;
  captionClass?: string;
}) {
  const { show, lightbox } = useLightbox();
  const [main, ...rest] = shots;

  const shot = (p: Photo, lazy: boolean) => (
    <button
      key={p.src}
      type="button"
      className="media gallery__shot"
      onClick={() => show(p)}
      aria-label={`Enlarge: ${p.alt}`}
    >
      <img src={p.src} alt={p.alt} loading={lazy ? "lazy" : undefined} />
    </button>
  );

  return (
    <div className="gallery">
      {shot(main, false)}
      {rest.length > 0 && <div className="gallery__row">{rest.map((p) => shot(p, true))}</div>}
      <p className={`mono ${captionClass}`}>{caption}</p>
      {lightbox}
    </div>
  );
}
