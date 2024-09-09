export function ButtonPrimary({ text }: ButtonPrimaryProps) {
  return (
    <div className="flex bg-[#0E6430] text-center rounded w-full h-10 ">
      <button className="text-white w-full">{text}</button>
    </div>
  );
}

type ButtonPrimaryProps = {
  text: string;
};
