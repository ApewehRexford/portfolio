import { useRef, useState } from "react";

export type Photo = { src: string; alt: string };

// Click-to-enlarge viewer. Render `lightbox` once, call `show(photo)` from any thumbnail.
export function useLightbox() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<Photo | null>(null);

  const show = (photo: Photo) => {
    setOpen(photo);
    dialogRef.current?.showModal();
  };

  const lightbox = (
    <dialog
      ref={dialogRef}
      className="lightbox"
      onClick={() => dialogRef.current?.close()}
      onClose={() => setOpen(null)}
    >
      {open && <img src={open.src} alt={open.alt} />}
      <button type="button" className="lightbox__close mono" aria-label="Close">
        Close ✕
      </button>
    </dialog>
  );

  return { show, lightbox };
}
