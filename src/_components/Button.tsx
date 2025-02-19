import cx from 'classnames';

type Props = {
  label: String;
  onClick: () => void;
  primary?: boolean;
  isLoading?: boolean;
};

function Button({ label, onClick, primary, isLoading }: Props) {
  return (
    <button
      onClick={onClick}
      className={cx('w-full min-w-[143px] rounded-md px-2 py-4 text-white', {
        'bg-green-300 hover:bg-green-200': primary,
        'bg-gray-200 hover:bg-gray-100': !primary,
      })}
    >
      {isLoading ? 'Loading...' : label}
    </button>
  );
}

export default Button;
