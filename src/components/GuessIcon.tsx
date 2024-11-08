// src/GuessIcon.tsx
import React from 'react';

import guessIcon from '../assets/guess.png';

const GuessIcon: React.FC = () => {
  return (
    <img src={guessIcon} alt="Guess Icon" style={{ width: '15px', height: '15px',borderRadius: '50%', objectFit: 'cover', marginLeft:'5px' }}/>
  );
};

export default GuessIcon;
