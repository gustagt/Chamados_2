import Link from "next/link";

export function LinkPrimary({ text, path }: LinkPrimaryProps) {
    return (
      <Link href={path} className="flex w-full min-w-20 text-center h-10 border border-[#0E6430] rounded p-2">
        <div className="w-full rounded  text-[#0E6430]">{text}</div>
      </Link>
    );
  }
  
  type LinkPrimaryProps = {
    text: string;
    path: string
  };
  