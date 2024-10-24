export default function LabelFormSelectOperator({
  label,
  value,
  setValue,
  array,
  required
}: LabelFormSelectOperatorProps) {
  return (
    <label htmlFor="" className="flex flex-col gap-2 w-full ">
      {label}

      <select
        name={label}
        id={label}
        className="border border-[#808080] px-2 py-1 text-[#313131] font-normal rounded  w-full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
      >
   
        {array &&
          array.map(
            (item) =>
              (item.sector && (
                <option className="" key={`${label}-${item.id}`} value={item.id}>
                  {item.sector}
                </option>
              )) ||
              (item.origin && (
                <option key={`${label}-${item.id}`} value={item.id}>
                  {item.origin}
                </option>
              ))||
              (item.service && (
                <option key={`${label}-${item.id}`} value={item.id}>
                  {item.service}
                </option>
              ))||
              (item.status && (
                <option key={`${label}-${item.id}`} value={item.id}>
                  {item.status}
                </option>
              ))
          )}
      </select>
    </label>
  );
}

type LabelFormSelectOperatorProps = {
  label: string;
  value?: string;
  setValue: Function;
  array: {
    id: number;
    origin?: string;
    sector?: string;
    service?: string;
    status?: string;
  }[];
  required?:boolean
};
