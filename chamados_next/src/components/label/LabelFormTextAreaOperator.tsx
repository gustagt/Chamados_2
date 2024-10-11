export default function LabelFormTextAreaOperator({label}: LabelFormTextAreaOperatorProps) {
  return (
    <label htmlFor="" className="flex flex-col gap-2 w-full ">
      {label}
      <textarea
       
        className="border border-[#808080] px-2 py-1 text-[#313131] font-normal rounded resize-none"
      />
    </label>
  );
}

type LabelFormTextAreaOperatorProps = {
    label: string
};
