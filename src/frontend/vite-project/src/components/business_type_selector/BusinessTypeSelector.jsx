import React from 'react';
import BusinessTypeButton from './BusinessButton';

const BusinessTypeSelector = (
) => {
  const handleClick = (type) => {
    console.log(`Selected business type: ${type}`);
    // Replace with your logic to handle the selection
};

  return (
    <div>
      <BusinessTypeButton  onClick={() => handleClick("General")}>General</BusinessTypeButton>
      <BusinessTypeButton  onClick={() => handleClick("Carnicería")}>Carnicería</BusinessTypeButton>
      <BusinessTypeButton  onClick={() => handleClick("Frutería")}>Frutería</BusinessTypeButton>
      <BusinessTypeButton  onClick={() => handleClick("Pescadería")}>Pescadería</BusinessTypeButton>
      <BusinessTypeButton  onClick={() => handleClick("Restaurante")}>Restaurante</BusinessTypeButton>
    </div>
  );
};

export default BusinessTypeSelector;
