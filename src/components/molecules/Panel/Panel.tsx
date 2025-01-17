import React from 'react';
import './panel.css';
import { Button } from '../../atoms/Button/Button';

interface PanelProps {
  title: string;
  onSave: () => void;
  onNext: () => void;
  onPrev: () => void;
  children: React.ReactNode;
  buttonTitle: string;
  fullwidth?: boolean;
}
const Panel: React.FC<PanelProps> = ({ title, fullwidth, onSave, onNext, onPrev, children, buttonTitle }) => {
  return (
    <div className="panel open" style={{ background: '#1d1d1f', width: fullwidth ? "100%" : "" }}>
      <div className="panel-header">
        <div className="panel-title">{title}</div>
      </div>
      <div className="panel-children">
        {children}
      </div>
      <div className="panel-controls">
        <button onClick={onPrev} type="button" className="nav-button"></button>
        <button onClick={onNext} type="button" className="nav-button"></button>
      </div>
      <div className="panel-content">
        <Button label={buttonTitle} onChange={onSave} size='small' type='submit' />
      </div>
    </div>
  );
};

export default Panel;
