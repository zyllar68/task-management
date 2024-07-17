type Props = {
  label?: string;
  placeholder?: string;
  errorMessage?: string;
};

function Input({ label, errorMessage, placeholder }: Props) {
  return (
    <div className="flex flex-col">
      {label && <label className="text-lg">{label}</label>}
      <input
        placeholder={placeholder}
        className="w-full rounded-md border-2 border-black px-2 py-4"
      />
      <p className="text-red">{errorMessage}</p>
    </div>
  );
}

export default Input;
