export default function LabelFormTextAreaOperator({label, value, setValue}: LabelFormTextAreaOperatorProps) {
  return (
    <label htmlFor="" className="flex flex-col gap-2 w-full ">
      {label}
      <textarea
        className="border border-[#808080] px-2 py-1 text-[#313131] font-normal rounded resize-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
     />
    </label>
  );
}

type LabelFormTextAreaOperatorProps = {
    label: string
    
    value?: string
    setValue: Function
    
};
