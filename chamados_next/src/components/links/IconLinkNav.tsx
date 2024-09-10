import Image from "next/image";
import Link from "next/link";

export default function IconLinkNav ({pathIcon, altIcon,pathLink}: IconLinkNavProps) {
    return <Link href={pathLink} className="self-start justify-self-start  p-4 text-center hover:cursor-pointer">
    <Image
    className="p-1"
      src={pathIcon}
      alt={altIcon}
      width={42}
      height={42}
    ></Image>
    <span>Voltar</span>
  </Link>
}

type IconLinkNavProps ={
    pathIcon: string,
    pathLink: string
    altIcon: string
}