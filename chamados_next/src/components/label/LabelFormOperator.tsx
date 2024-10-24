export default function LabelFormOperator({label, type, value, setValue, required}: LabelFormOperatorProps) {
  return (
    <label htmlFor="" className="flex flex-col gap-2 w-full">
      {label}
      <input
        type={type ? type : 'text'}
        className="border border-[#808080] px-2 py-1 text-[#313131] font-normal rounded "
        value={value || ""}
        onChange={(e) => setValue(e.target.value)}
        required = {required}
      />
    </label>
  );
}

type LabelFormOperatorProps = {
    label: string
    value?: string
    setValue: Function
    type?: string
    required?: boolean
};
