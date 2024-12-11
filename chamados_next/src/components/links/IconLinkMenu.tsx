
import Link from "next/link";
import { ReactNode } from "react";

export default function IconLinkMenu({
  pathLink,
  text,
  iconComponent,
}: IconLinkMenuProps) {
  return (
    <div className="flex justify-center content-center ">
      <Link href={pathLink} className="p-3 flex flex-col gap-3 justify-between items-center">
        {iconComponent}

        <span className="flex justify-center text-white text-center">
          {text}
        </span>
      </Link>
    </div>
  );
}

type IconLinkMenuProps = {
  pathLink: string;
  text: string;
  iconComponent?: ReactNode;
};
