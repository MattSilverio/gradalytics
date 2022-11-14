import { useMemo } from "react";

type QuizzButtonType = {
  children: React.ReactNode;
  onClick?: () => void;
  correct?: boolean | null;
};

export const QuizzButton: React.FC<QuizzButtonType> = ({
  correct = null,
  onClick,
  children,
}) => {
  const answerColor = () => {
    if (correct) return "bg-green-500 text-white border-green-500";
    if (correct === false) return "bg-red-500 text-white border-red-500";
    return "border-indigo-700";
  };

  return (
    <button
      className={`px-10 py-2 font-bold rounded-full border-2 w-full max-w-xs ${answerColor()}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
