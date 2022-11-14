type ButtonType = {
  onClick?: () => void;
  next?: boolean;
  previous?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

export const Button: React.FC<ButtonType> = ({
  onClick,
  next,
  previous,
  children,
  className,
  disabled = false,
}) => {
  const buttonClassName = () => {
    if (disabled) return "bg-gray-400";
    if (next) return "bg-green-400";
    return "bg-red-400";
  };
  return (
    <button
      disabled={disabled}
      className={`${buttonClassName()} px-10 py-2 rounded-sm text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
