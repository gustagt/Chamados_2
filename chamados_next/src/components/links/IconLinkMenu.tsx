import Image from "next/image";
import Link from "next/link";

export default function IconLinkMenu({pathIcon, altIcon, pathLink, text}:IconLinkMenuProps){
    return (<div className="flex justify-center content-center ">
        <Link href={pathLink} className="p-3 flex flex-col gap-3 justify-between">
          <Image
          className="self-center h-[100px]"
            src={pathIcon}
            alt={altIcon}
            width={100}
            height={100}
            priority
          />
          <span className="flex justify-center text-white text-center">
            {text}
          </span>
        </Link>
      </div>)
}

type IconLinkMenuProps = {
    pathIcon : string
    altIcon:string
    pathLink:string
    text:string
}