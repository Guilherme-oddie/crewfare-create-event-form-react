import React from "react";
import "./grid.css";

interface GridProps {
  children: React.ReactNode;
  item?: boolean;
  gap?: number;
  size?: number;
  total?: number;
  isRow?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Grid: React.FC<GridProps> = ({
  children,
  item = false,
  gap = 16,
  size,
  total = 12,
  isRow = false,
  className = "",
  style = {},
}) => {
  const containerStyle = !item
    ? {
      gap: `${gap}px`,
      gridTemplateColumns: isRow ? undefined : `repeat(${total}, 1fr)`,
      gridTemplateRows: isRow ? `repeat(${total}, 1fr)` : undefined,
    }
    : {};

  const itemStyle = item && size
    ? {
      gridColumn: isRow ? undefined : `span ${size}`,
      gridRow: isRow ? `span ${size}` : undefined,
    }
    : {};

  return (
    <div
      className={`${item ? "grid-item" : "grid-container"} ${className}`.trim()}
      style={{ ...style, ...containerStyle, ...itemStyle }}
    >
      {children}
    </div>
  );
};

export default Grid;
