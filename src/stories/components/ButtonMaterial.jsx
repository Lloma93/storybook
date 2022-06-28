import React from "react";
import Button from '@mui/material/Button';

export const ButtonMaterial = () => {
  return (
    <div>
      <Button variant="contained" 
      onClick={() => console.log('event click')}
      >
        Botão Material
      </Button>
    </div>
  );
};