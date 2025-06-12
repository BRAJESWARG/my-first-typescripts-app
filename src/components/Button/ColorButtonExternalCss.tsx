import React from 'react';
import '../styles/ColorButton.css';

type ColorButtonProps = {
  label: string;
  bgcolor: string;
};

const ColorButton: React.FC<ColorButtonProps> = ({ label, bgcolor }) => {
  return <button className={`color-button ${bgcolor}`}>{label}</button>;
};

export default ColorButton;
