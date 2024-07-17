import cx from 'classnames';

type Props = {
  label: String;
  onClick: () => void;
  primary?: boolean;
};

function Button({ label, onClick, primary }: Props) {
  return (
    <button
      onClick={onClick}
      className={cx('w-full rounded-md px-4 py-4 text-white', {
        'bg-green-300 hover:bg-green-200': primary,
        'bg-gray-200 hover:bg-gray-100': !primary,
      })}
    >
      {label}
    </button>
  );
}

export default Button;
