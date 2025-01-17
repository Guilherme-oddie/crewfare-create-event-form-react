import React from 'react';
import './typography.css';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'default' | 'header' | 'title';
  className?: string;
  style?: React.CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({ children, variant = 'default', className, style }) => {
  return <div className={`typography ${variant} ${className || ''}`} style={style}> {children}</div >;
};

export default Typography;
export type { TypographyProps };
