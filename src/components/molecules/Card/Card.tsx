import React from 'react';
import './card.css';

interface CardProps {
  children: React.ReactNode;
  padding?: string;
  fullwidth?: boolean;
}

const Card: React.FC<CardProps> = ({ children, padding = '20px' }) => {
  return <div className="card" style={{ padding }} >{children}</div>;
};

export default Card;
