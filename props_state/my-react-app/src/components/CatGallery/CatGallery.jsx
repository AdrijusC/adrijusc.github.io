import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CatGallery.scss';

const CatGallery = ({ breedId }) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!breedId) return;

    const fetchPhotos = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
          headers: { 'x-api-key': import.meta.env.VITE_CAT_API_KEY },
          params: { breed_id: breedId, limit: 6 },
        });
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [breedId]);

  if (loading) return <div className="loading">Loading photos...</div>;
  if (!photos.length) return <div className="no-photos">No photos available.</div>;

  return (
    <div className="cat-gallery">
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.url}
          alt="Cat"
          className="cat-image"
        />
      ))}
    </div>
  );
};

export default CatGallery;