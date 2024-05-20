import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, openModal }) {
  return (
    <>
      <ul className={css.galleryList}>
        {items.map((item) => {
          return (
            <li key={item.id} className={css.galleryItem}>
              <ImageCard
                alt={item.alt_description}
                urlSm={item.urls.small}
                urlReg={item.urls.regular}
                openModal={openModal}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
