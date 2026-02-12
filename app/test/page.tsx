"use client";

import { useState, useEffect } from "react";
import { Rect, Stage, Layer } from "react-konva";

export default function Page() {
  const [dim, setDim] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });
  const size = 40; // Ukuran kotak grid

  useEffect(() => {
    const handleResize = () =>
      setDim({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const grid = [];
  const centerFocus = [];
  for (let x = 0; x < dim.w; x += size) {
    for (let y = 0; y < dim.h; y += size) {
      grid.push(
        <Rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width={size}
          height={size}
          stroke="#ececec"
          strokeWidth={1}
        />,
      );
    }
  }
  const centerX = dim.w / 2 - 50;
  const centerY = dim.h / 2 - 50;
  const snappedX = Math.floor(centerX / size) * size;
  const snappedY = Math.floor(centerY / size) * size;
  return (
    <div>
      <Stage width={dim.w} height={dim.h}>
        <Layer>{grid}</Layer>
        <Layer>
          <Rect
            width={40*20}
            height={40}
            x={snappedX}
            y={snappedY}
            stroke="black"
            strokeWidth={3}
          />
        </Layer>
      </Stage>
    </div>
  );
}
