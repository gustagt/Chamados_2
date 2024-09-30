export default function LabelInputRadio({ text, value, inputFamily, id, setValue, required }: LabelInputRadioProps) {
  return (
    <label htmlFor={id} className="flex gap-2">
      <input type="radio" id={id} value={value} name={inputFamily} onChange={(e) => setValue(e.target.value)} required={required}/>
      {text}
    </label>
  );
}

type LabelInputRadioProps = {
  text: string;
  value: number;
  inputFamily:string;
  id: string;
    setValue: Function
    required:boolean
};
