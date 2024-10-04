export default function IconWorkStation({width, height, color}:IconWorkStationProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 168 150"
      fill="none"
    >
      <path
        d="M154 0H14C6.27083 0 0 6.27083 0 14V107.333C0 115.063 6.27083 121.333 14 121.333H70L65.3333 135.333H44.3333C40.4542 135.333 37.3333 138.454 37.3333 142.333C37.3333 146.213 40.4542 149.333 44.3333 149.333H123.667C127.546 149.333 130.667 146.213 130.667 142.333C130.667 138.454 127.546 135.333 123.667 135.333H102.667L98 121.333H154C161.729 121.333 168 115.063 168 107.333V14C168 6.27083 161.729 0 154 0ZM149.333 102.667H18.6667V18.6667H149.333V102.667Z"
        fill={color}
      />
    </svg>
  );
}

type IconWorkStationProps = {
  width: number;
  height: number;
  color: string;
};
