'use client';

type Props = {
  onClick: () => void;
};

function PenIcon({ onClick }: Props) {
  return (
    <svg
      onClick={onClick}
      className="cursor-pointer"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 2L22 6"
        stroke="#1D6CE1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 20.5L19 9L15 5L3.5 16.5L2 22L7.5 20.5Z"
        stroke="#1D6CE1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default PenIcon;
