type PixelAlienProps = {
  className?: string;
  color?: string;
  pixelSize?: number;
};

// Classic Space Invaders crab alien (middle row) on an 11×8 grid
const PIXELS = [
  [0,1,0,0,0,0,0,0,0,1,0],
  [0,0,1,0,0,0,0,0,1,0,0],
  [0,1,1,1,1,1,1,1,1,1,0],
  [1,1,0,1,1,1,1,1,0,1,1],
  [1,1,1,1,1,1,1,1,1,1,1],
  [0,1,1,1,1,1,1,1,1,1,0],
  [1,0,1,0,0,0,0,0,1,0,1],
  [0,1,0,0,0,0,0,0,0,1,0],
];

export function PixelAlien({ className = '', color = '#00FF41', pixelSize = 3 }: PixelAlienProps) {
  const w = 11 * pixelSize;
  const h = 8 * pixelSize;
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      aria-hidden
    >
      {PIXELS.flatMap((row, r) =>
        row.map((cell, c) =>
          cell === 1 ? (
            <rect
              key={`${r}-${c}`}
              x={c * pixelSize}
              y={r * pixelSize}
              width={pixelSize}
              height={pixelSize}
              fill={color}
            />
          ) : null
        )
      )}
    </svg>
  );
}
