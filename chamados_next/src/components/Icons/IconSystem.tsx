export default function IconSystem({width, height, color}: IconSystemProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 112 102"
      fill="none"
    >
      <rect width="46" height="44" rx="5" fill={color} />
      <rect x="64" width="48" height="44" rx="5" fill={color} />
      <rect x="64" y="58" width="48" height="44" rx="5" fill={color} />
      <rect y="58" width="46" height="44" rx="5" fill={color} />
    </svg>
  );
}

type IconSystemProps = {
  width: number;
  height: number;
  color: string;
};
