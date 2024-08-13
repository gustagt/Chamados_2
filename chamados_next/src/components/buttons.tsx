export function ButtonOne({text, ...props}: ButtonProps) {
    return (
        <div className="flex bg-[#0E6430]  w-full text-center justify-center rounded h-10">
          <button className="text-white text-sm">{text}</button>
        </div>
    );
}
export function ButtonTwo({text, ...props}: ButtonProps) {
    return (
        <div className="flex bg-white border border-[#0E6430] w-full text-center justify-center rounded h-10">
          <button className="text-[#0E6430]">{text}</button>
        </div>
    );
}
  

type ButtonProps = {
  text: string;
};