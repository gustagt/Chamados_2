
import Link from "next/link";
import IconBack from "../Icons/IconBack";

export default function IconLinkNav ({pathLink}: IconLinkNavProps) {
    return <Link href={pathLink} className="flex flex-col self-start justify-self-start gap-2 p-4 text-center hover:cursor-pointer ">
    <IconBack color="white" width={42} height={42}/>
    <span>Voltar</span>
  </Link>
}

type IconLinkNavProps ={
 
    pathLink: string
}