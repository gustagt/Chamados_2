export default function ButtonSecundary({ text }: ButtonSecundaryProps) {
    return (
  
        <button className="border border-[#0E6430] w-1/4 min-w-20 p-2 rounded  text-[#0E6430]" >{text}</button>
     
    );
  }
  
  type ButtonSecundaryProps = {
    text: string;
  };
  