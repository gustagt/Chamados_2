export default function LabelFormOperator({label, type}: LabelFormOperatorProps) {
  return (
    <label htmlFor="" className="flex flex-col gap-2 w-full">
      {label}
      <input
        type={type ? type : 'text'}
        className="border border-[#808080] px-2 py-1 text-[#313131] font-normal rounded "
      />
    </label>
  );
}

type LabelFormOperatorProps = {
    label: string
    type?: string
};
