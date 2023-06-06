import React, { useEffect, useState } from 'react';
import { fetchPhotos } from '../../action/photosActions';
import { useSelector, useDispatch } from 'react-redux';
import './UserPage.scss';

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
            <div key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
              <p>{photo.id}</p>
            </div>
          ))}
        </div>
      )}
      <div className="pagination">
        <button onClick={handleClickPrev} disabled={currentPage === 1}>
          Назад
        </button>
        <button onClick={handleClickNext}>
          Вперед
        </button>
      </div>
    </div>
  );
};

export default UserPage;
