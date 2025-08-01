import type { Photo } from "../../types/photo";
import Grid from "../Grid/Grid";
import GridItem from "../GridItem/GridItem";
import PhotosGalleryItem from "../PhotosGalleryItem/PhotosGalleryItem";

interface PhotosGalleryProps {
  photos: Photo[];
  onOpenModal: (photo: Photo) => void;
}

export default function PhotosGallery({ photos, onOpenModal }: PhotosGalleryProps) {
  if (photos.length === 0) return null;

  return (
    <Grid>
      {photos.map((photo) => (
        <GridItem key={photo.id}>
          <PhotosGalleryItem photo={photo} onClick={() => onOpenModal(photo)} />
        </GridItem>
      ))}
    </Grid>
  );
}