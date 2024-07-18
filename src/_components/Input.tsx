type Props = {
  defaultValue?: any;
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  name: string;
  readOnly?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({
  defaultValue,
  label,
  errorMessage,
  placeholder,
  name,
  onChange,
  readOnly,
}: Props) {
  return (
    <div className="flex flex-col">
      {label && <label className="text-lg">{label}</label>}
      <input
        className="w-full min-w-[143px] rounded-md border-2 border-black px-2 py-4"
        defaultValue={defaultValue}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        onChange={onChange}
      />
      <p className="text-red">{errorMessage}</p>
    </div>
  );
}

export default Input;
