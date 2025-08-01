import { useState } from "react";

import Section from "../Section/Section";
import Container from "../Container/Container";
import Form from "../Form/Form";
import Loader from "../Loader/Loader";
import Text from "../Text/Text";
import PhotosGallery from "../PhotosGallery/PhotosGallery";
import Modal from "../Modal/Modal";

import type { Photo } from "../../types/photo";
import { getPhotos } from "../../services/photos";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handleSearch = async (query: string) => {
    try {
      setPhotos([]);
      setIsLoading(true);
      setIsError(false);
      const data = await getPhotos(query);

      if (data.length === 0) {
        alert("No photos found for your request.");
      }

      setPhotos(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectPhoto = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <>
      <Section>
        <Container>

          <Toaster/>

          <Form onSubmit={handleSearch} />

          {isLoading && <Loader />}

          {isError && <Text>Something went wrong. Please try again.</Text>}

          {photos.length > 0 && (
            <PhotosGallery photos={photos} onOpenModal={handleSelectPhoto} />
          )}

        </Container>
      </Section>

      {selectedPhoto && (
        <Modal onClose={handleCloseModal}>
          <img
            src={selectedPhoto.src.large}
            alt={selectedPhoto.alt || "Selected photo"}
           />
        </Modal>
      )}
    </>
  );
}




