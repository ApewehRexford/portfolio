import { marquee } from "../content";

function Track({ hidden }: { hidden?: boolean }) {
  return (
    <div className="marquee__track" aria-hidden={hidden}>
      {marquee.map((item) => (
        <span key={item} className="marquee__group">
          <span className="marquee__item">{item}</span>
          <span className="marquee__star serif">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" role="marquee" aria-label="Core stack">
      <div className="marquee__inner">
        <Track />
        <Track hidden />
      </div>
    </div>
  );
}
