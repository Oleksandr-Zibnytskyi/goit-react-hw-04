import css from "./ImageCard.module.css";

export default function ImageCard({ alt, urlSm, urlReg, openModal }) {
  return (
    <div className={css.imageCard}>
      <img
        src={urlSm}
        alt={alt}
        width="300"
        height="200"
        className={css.image}
        onClick={() => openModal(alt, urlReg)}
      />
    </div>
  );
}
