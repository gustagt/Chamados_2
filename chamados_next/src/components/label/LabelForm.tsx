export default function LabelForm({ text, required}: LabelFormProps) {
    return (
        <div>{text} {required&& (<span className="text-red-600">*</span>)}</div>
    );
  }
  
  type LabelFormProps = {
    text: string;
    required?: boolean
  };
  