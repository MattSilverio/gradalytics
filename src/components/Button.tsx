type ButtonType = {
  onClick?: () => void;
  next?: boolean;
  previous?: boolean;
  children: React.ReactNode;
};

export const Button: React.FC<ButtonType> = ({
  onClick,
  next,
  previous,
  children,
}) => {
  return (
    <button
      className={`${next && "bg-green-400"} ${
        previous && "bg-red-500"
      } px-10 py-2 rounded-sm text-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
