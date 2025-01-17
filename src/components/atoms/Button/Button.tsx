import React, { useState, MouseEvent, ButtonHTMLAttributes, FC } from 'react';
import './button.css';

type ButtonColor = 'primary' | 'secondary';
type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  backgroundColor?: string;
  size?: ButtonSize;
  label: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({
  color = 'primary',
  backgroundColor,
  size = 'medium',
  label,
  onClick,
  ...props
}) => {
  const [animate, setAnimate] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 600);
    if (onClick) {
      onClick(e);
    }
  };

  const mode =
    color === 'primary'
      ? 'storybook-button--primary'
      : 'storybook-button--secondary';

  const classes = [
    'storybook-button',
    `storybook-button--${size}`,
    mode,
    animate ? 'move-button' : '',
  ].join(' ');

  return (
    <button
      type="button"
      className={classes}
      style={backgroundColor ? { backgroundColor } : {}}
      onClick={handleClick}
      {...props}
    >
      {label}
    </button>
  );
};
