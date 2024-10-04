export default function IconTell({ width, height, color }: IconTellProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 106 106"
      fill="none"
    >
      <path
        d="M3.85071 5.0951L25.3815 0.126455C27.7209 -0.411815 30.1224 0.809644 31.0748 3.00413L41.0121 26.1912C41.8816 28.22 41.3019 30.6008 39.5836 31.9879L27.0377 42.2565C34.4907 58.1354 47.5127 71.3438 63.7229 78.9416L73.9915 66.3958C75.3992 64.6775 77.7594 64.0978 79.7882 64.9673L102.975 74.9046C105.19 75.8776 106.412 78.2792 105.874 80.6186L100.905 102.149C100.387 104.385 98.4 106 96.0605 106C43.0409 106 0 63.042 0 9.93954C0 7.62083 1.59412 5.61267 3.85071 5.0951Z"
        fill={color}
      />
    </svg>
  );
}

type IconTellProps = {
  width: number;
  height: number;
  color: string;
};
