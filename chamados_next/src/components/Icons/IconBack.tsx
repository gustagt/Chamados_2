export default function IconBack({ width, height, color }: IconBackProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 49 46"
      fill="none"
    >
      <path
        d="M24.5 45.1579C11.1315 45.1579 0.300049 35.052 0.300049 22.5789C0.300049 10.1059 11.1315 0 24.5 0C37.8686 0 48.7001 10.1059 48.7001 22.5789C48.7001 35.052 37.8686 45.1579 24.5 45.1579ZM27.3201 32.084L19.9528 25.4924H37.771C39.0688 25.4924 40.113 24.5182 40.113 23.3073V21.8506C40.113 20.6397 39.0688 19.6655 37.771 19.6655H19.9528L27.3201 13.0739C28.2667 12.2272 28.2862 10.816 27.3592 9.95113L26.2858 8.95874C25.3685 8.10293 23.8853 8.10293 22.9778 8.95874L10.0288 21.0312C9.11158 21.887 9.11158 23.2709 10.0288 24.1176L22.9778 36.1992C23.8951 37.055 25.3783 37.055 26.2858 36.1992L27.3592 35.2068C28.2862 34.3419 28.2667 32.9307 27.3201 32.084Z"
        fill={color}
      />
    </svg>
  );
}

type IconBackProps = { width: number; height: number; color: string };
