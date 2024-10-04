export default function IconCheckConsult({ status }: IconCheckConsultProps) {
  let color;
  let stroke1;
  let stroke2;
  switch (status) {
    case 3:
      color = "#0B612C";
      stroke1 = "#0B612C";
      stroke2 = "white";
      break;
    case 2:
      color = "#fff";
      stroke1 = "#0B612C";
      stroke2 = "#0B612C";
      break;
    case 1:
      color = "rgba(176, 176, 176, 1)";
      stroke1 = "rgba(176, 176, 176, 1)";
      stroke2 = "white";
      break;

    default:
      break;
  }
  return (
    <svg
      width="40"
      height="39"
      viewBox="0 -1 36 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Component 23">
        <path
          id="Ellipse 4"
          d="M35.5 17.5C35.5 26.8757 27.6784 34.5 18 34.5C8.32165 34.5 0.5 26.8757 0.5 17.5C0.5 8.12434 8.32165 0.5 18 0.5C27.6784 0.5 35.5 8.12434 35.5 17.5Z"
          fill={color}
          strokeWidth="2"
          stroke={stroke1}
        />
        <path
          id="Vector"
          d="M9 19L13.8571 25L26 10"
          stroke={stroke2}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

type IconCheckConsultProps = {
  status: number;
};
