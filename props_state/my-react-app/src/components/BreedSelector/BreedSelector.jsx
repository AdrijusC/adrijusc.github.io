import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BreedSelector.scss';

const BreedSelector = ({ onSelectBreed }) => {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await axios.get('https://api.thecatapi.com/v1/breeds', {
          headers: { 'x-api-key': import.meta.env.VITE_CAT_API_KEY },
        });
        setBreeds(response.data);
      } catch (error) {
        console.error('Error fetching breeds:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBreeds();
  }, []);

  if (loading) return <div className="loading">Loading breeds...</div>;

  return (
    <select onChange={(e) => onSelectBreed(e.target.value)} className="breed-selector">
      <option value="">Select a breed</option>
      {breeds.map((breed) => (
        <option key={breed.id} value={breed.id}>
          {breed.name}
        </option>
      ))}
    </select>
  );
};

export default BreedSelector;