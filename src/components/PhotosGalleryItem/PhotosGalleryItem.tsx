import type { Photo } from "../../types/photo";
import styles from "./PhotosGalleryItem.module.css";

interface PhotosGalleryItemProps {
  photo: Photo;
  onClick?: () => void;
}

export default function PhotosGalleryItem({ photo, onClick }: PhotosGalleryItemProps) {
  return (
    <div
      className={styles.thumb}
      style={{
        backgroundColor: photo.avg_color,
        borderColor: photo.avg_color,
        cursor: onClick ? "pointer" : "default",
      }}
      onClick={onClick}
    >
      <img src={photo.src.large} alt={photo.alt || "Photo"} />
    </div>
  );
}

