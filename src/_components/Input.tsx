type Props = {
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  name: string;
  readOnly?: boolean;
};

function Input({ label, errorMessage, placeholder, name, readOnly }: Props) {
  return (
    <div className="flex flex-col">
      {label && <label className="text-lg">{label}</label>}
      <input
        name={name}
        placeholder={placeholder}
        className="w-full rounded-md border-2 border-black px-2 py-4"
        readOnly={readOnly}
      />
      <p className="text-red">{errorMessage}</p>
    </div>
  );
}

export default Input;
