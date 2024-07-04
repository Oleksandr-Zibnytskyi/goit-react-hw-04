import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import { getImages } from "./images-api";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [imageInfo, setImageInfo] = useState({ alt: "", url: "" });

  useEffect(() => {
    if (searchQuery.trim() === "") return;

    async function fetchPhoto() {
      try {
        setIsLoading(true);
        
        setIsError(false);
        const data = await getImages(searchQuery, page);
        setImages((prevState) => [...prevState, ...data]);
      } catch (error) {
        toast.error("Error fetching. Please try again!");
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPhoto();
  }, [page, searchQuery]);

  const handleSearch = (value) => {
    setSearchQuery(value);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (alt, url) => {
    setIsOpen(true);
    setImageInfo({ alt, url });
  };

  const closeModal = () => {
    setIsOpen(false);
    setImageInfo({ alt: "", url: "" });
  };

  return (
<div>
  <SearchBar onSearch={handleSearch} />
  {isError && <ErrorMessage />}
  {isLoading && <Loader />}
  {images.length > 0 && (
    <ImageGallery items={images} openModal={openModal} />
  )}
  <ImageModal
    isModalOpen={isOpen}
    closeModal={closeModal}
    imageInfo={imageInfo}
  />
  {images.length > 0 && !isLoading && (
    <LoadMoreBtn onLoadMore={handleLoadMore} />
  )}
  <Toaster />
</div>
  );
}

export default App;
