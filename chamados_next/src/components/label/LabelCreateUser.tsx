export default function LabelCreateUser({label, text}: LabelCreateUserProps) {
  return (
    <div className="flex flex-wrap flex-col gap-1 w-1/2">
      <span className="text-[#848282]">{label}:</span>
      <span className="break-words max-w-full">{text}</span>
    </div>
  );
}

type LabelCreateUserProps = {
    label: string,
    text: string
};
