import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-16">
        <h1 className="text-2xl md:text-4xl w-1/2 text-[Marvel]">PÁGINA EM DESENVOLVIMENTO.</h1>
      <Image src={'/icons/stickman.svg'} width={512} height={512} alt="Stickman com um laptop"/>
    </div>
  );
}
