import React, { useState } from 'react';
import BreedSelector from '../components/BreedSelector/BreedSelector';
import CatGallery from '../components/CatGallery/CatGallery';
import './App.scss';

const App = () => {
  const [selectedBreed, setSelectedBreed] = useState('');

  return (
    <div className="app">
      <h1 className="app-title">Cat Photo Search</h1>
      <BreedSelector onSelectBreed={setSelectedBreed} />
      {selectedBreed && <CatGallery breedId={selectedBreed} />}
    </div>
  );
};

export default App;