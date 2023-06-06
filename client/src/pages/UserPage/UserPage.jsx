import React, { useEffect, useState } from 'react';
import { fetchPhotos } from '../../action/photosActions';
import { useSelector, useDispatch } from 'react-redux';
import './UserPage.scss';
import PhotoCard from '../../components/photoCard/PhotoCard';

const UserPage = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.photos);
  const isLoading = useSelector((state) => state.photos.isLoading);
  const [currentPage, setCurrentPage] = useState(1);
  const photosPerPage = 10;

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const handleClickPrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleClickNext = () => {
    const totalPages = Math.ceil(photos.length / photosPerPage);
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const indexOfLastPhoto = currentPage * photosPerPage;
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);

  return (
    <div className="">
      {isLoading ? (
        <p>Loading photos...</p>
      ) : (
        <div className="photo__container">
          {currentPhotos.map((photo) => (
            <PhotoCard key={photo.id} id={photo.id} img={photo.thumbnailUrl}/>
          ))}
        </div>
      )}
      <div className="pagination">
        <button onClick={handleClickPrev} disabled={currentPage === 1} className='pagination__button'>
          Назад
        </button>
        <button onClick={handleClickNext} className='pagination__button'>
          Вперед
        </button>
      </div>
    </div>
  );
};

export default UserPage;
