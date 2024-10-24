export default function IconTwoArrowPage({
  width,
  height,
  color,
  className,
  onClick
}: IconTwoArrowPageProps) {
  return (
    <svg
    onClick={()=> onClick()}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 20"
      fill="none"
    >
      <path
        d="M11.9816 8.93783L20.1684 0.440487C20.7343 -0.146829 21.6493 -0.146829 22.2091 0.440487L23.5696 1.85255C24.1354 2.43986 24.1354 3.38957 23.5696 3.97063L17.7726 10L23.5756 16.0231C24.1415 16.6104 24.1415 17.5601 23.5756 18.1412L22.2151 19.5595C21.6493 20.1468 20.7343 20.1468 20.1744 19.5595L11.9876 11.0622C11.4157 10.4749 11.4157 9.52515 11.9816 8.93783ZM0.423643 11.0622L8.61051 19.5595C9.17636 20.1468 10.0914 20.1468 10.6512 19.5595L12.0117 18.1475C12.5775 17.5601 12.5775 16.6104 12.0117 16.0294L6.21464 10L12.0177 3.97688C12.5835 3.38957 12.5835 2.43986 12.0177 1.85879L10.6572 0.440487C10.0914 -0.146829 9.17636 -0.146829 8.61653 0.440487L0.429663 8.93783C-0.142214 9.52515 -0.142214 10.4749 0.423643 11.0622Z"
        fill={color}
      />
    </svg>
  );
}

type IconTwoArrowPageProps = {
  className?: string;
  width: number;
  height: number;
  color: string;
  onClick: Function
};
