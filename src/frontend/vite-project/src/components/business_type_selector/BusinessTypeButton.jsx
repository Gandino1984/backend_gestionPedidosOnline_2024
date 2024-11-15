import React from 'react';
// import { Button } from '@mui/material';

const BusinessTypeButton = ({ label, onClick }) => {
  return (
    <Button onClick={onClick}>{label}</Button>
  );
};

export default BusinessTypeButton;
