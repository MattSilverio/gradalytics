type ParagraphType = {
  correct?: boolean | null;
  children: React.ReactNode;
};
export const Paragraph: React.FC<ParagraphType> = ({
  correct = null,
  children,
}) => {
  const answerColor = () => {
    if (correct) return "text-green-500";
    if (correct === false) return "text-red-500";
    return;
  };

  return <p className={`${answerColor()} text-xl`}>{children}</p>;
};
