export default function IconArrowPage({ width, height, color, className, onClick }: IconArrowPageProps) {
  return (
    <svg 
    onClick={() => onClick()}
    className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 13 20"
      fill="none"
    >
      <path
        d="M0.44264 8.93783L8.99661 0.440487C9.58784 -0.146829 10.5439 -0.146829 11.1288 0.440487L12.5503 1.85255C13.1415 2.43986 13.1415 3.38957 12.5503 3.97063L6.49332 10L12.5566 16.0231C13.1478 16.6104 13.1478 17.5601 12.5566 18.1412L11.1351 19.5595C10.5439 20.1468 9.58784 20.1468 9.0029 19.5595L0.448929 11.0622C-0.148591 10.4749 -0.148591 9.52515 0.44264 8.93783Z"
        fill={color}
      />
    </svg>
  );
}

type IconArrowPageProps = {
  width: number;
  height: number;
  color: string;
  className?: string
  onClick: Function
};
