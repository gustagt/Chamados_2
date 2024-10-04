export default function IconThreeDot({
  width,
  height,
  color,
}: IconThreeDotProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 114 30"
      fill="none"
    >
      <ellipse cx="16" cy="15" rx="16" ry="15" fill={color} />
      <ellipse cx="98" cy="15" rx="16" ry="15" fill={color} />
      <ellipse cx="57" cy="15" rx="16" ry="15" fill={color} />
    </svg>
  );
}

type IconThreeDotProps = {
  width: number;
  height: number;
  color: string;
};
