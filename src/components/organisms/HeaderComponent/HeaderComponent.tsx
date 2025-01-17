import React from 'react';
import './headerComponent.css';
import crewfare from '../../../stories/assets/crewfare.svg'


export const HeaderComponent = () => {
  return (
    <div className="storybook-header">
      <img src={crewfare} alt="crewfare" />
    </div>
  );
};

