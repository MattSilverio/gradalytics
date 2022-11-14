import { useState } from "react";
import { Button } from "../../components/Button";
import { H2 } from "../../components/Header";
import { Paragraph } from "../../components/Paragraph";
import { QuizzButton } from "../../components/Quizz/Button";
import { QuizzCounter } from "../../components/Quizz/Counter";

function intToChar(int: number) {
  const code = "a".charCodeAt(0);
  return String.fromCharCode(code + int);
}

const questions = [
  {
    id: 1,
    question: "Qual a estrutura é de repetição?",
    explanation: "",
    answers: [
      { id: 1, text: "var = a", correct: false },
      { id: 2, text: "a[] = 123", correct: false },
      { id: 3, text: "a = pd.Dataframe()", correct: false },
      { id: 4, text: "IF", correct: true },
    ],
  },
  {
    id: 2,
    question: " Declaração de variável em Python?",
    explanation: "",
    answers: [
      { id: 1, text: "A = !!A", correct: false },
      { id: 2, text: "[]= A", correct: false },
      { id: 3, text: "A =A", correct: true },
      { id: 4, text: "A = A?", correct: false },
    ],
  },
  {
    id: 2,
    question: "Forma de declarar dicionários em Python?",
    explanation: "",
    answers: [
      { id: 1, text: "B =B[]", correct: false },
      { id: 2, text: "B ={}", correct: true },
      { id: 3, text: "B = '' ", correct: false },
      { id: 4, text: "B=B+1", correct: false },
    ],
  },
  {
    id: 2,
    question: "Declaração de matriz em Python?",
    explanation: "",
    answers: [
      { id: 1, text: "C={}", correct: false },
      { id: 2, text: "C=[]", correct: false },
      { id: 3, text: "C={[]}", correct: false },
      { id: 4, text: "C=[[]]", correct: true },
    ],
  },
  {
    id: 2,
    question: "Concatenação de variáveis em Python?",
    explanation: "",
    answers: [
      { id: 1, text: "A= A + 'casa'", correct: true },
      { id: 2, text: "A = 1+1", correct: false },
      { id: 3, text: "A = A", correct: false },
      { id: 4, text: "A = A!", correct: false },
    ],
  },
];

type StudentAnswers = {
  questionId: number;
  isCorrect: boolean;
  answerIndex: number;
}[];

var newObj = questions.map((x) => ({ ...x, isAnswered: false }));

export function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [students, setStudents] = useState<StudentAnswers>([]);
  const [data, setData] = useState(newObj);

  const nextPage = () => setCurrentIndex(currentIndex + 1);
  const previousPage = () => setCurrentIndex(currentIndex - 1);

  const onClick = (x: any, correct: boolean) => {
    let newArr = [...data];
    newArr[currentIndex].isAnswered = true;
    setData(newArr);

    const markedAnswer = currentItem.answers.indexOf(x);

    if (correct) {
      return setStudents([
        ...students,
        {
          isCorrect: true,
          questionId: currentIndex,
          answerIndex: markedAnswer,
        },
      ]);
    }
    return setStudents([
      ...students,
      { isCorrect: false, questionId: currentIndex, answerIndex: markedAnswer },
    ]);
  };

  const currentItem = data[currentIndex];

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <QuizzCounter current={currentIndex + 1} total={data.length} />
      <H2>{currentItem.question}</H2>
      <div className="w-full grid gap-2 my-4 justify-items-center">
        {currentItem.answers.map((x) => {
          const isCorrect = () => {
            if (currentItem.isAnswered) {
              x.correct;
              if (
                students[currentIndex].answerIndex ===
                currentItem.answers.indexOf(x)
              ) {
                return x.correct;
              }
            }
            return null;
          };

          return (
            <QuizzButton
              correct={isCorrect()}
              disabled={currentItem.isAnswered}
              key={x.id}
              onClick={() => onClick(x, x.correct)}
            >
              {x.text}
            </QuizzButton>
          );
        })}
      </div>
      <div className="flex gap-2">
        {currentIndex !== 0 && (
          <Button previous onClick={previousPage} disabled={currentIndex === 0}>
            {"<"} Anterior
          </Button>
        )}
        <Button
          className={currentItem.isAnswered ? "" : "hidden"}
          next
          onClick={nextPage}
          disabled={currentIndex + 1 >= data.length}
        >
          Próximo {">"}{" "}
        </Button>
      </div>
      {currentItem.isAnswered && (
        <Paragraph
          className="fixed bottom-10"
          correct={students[currentIndex].isCorrect}
        >
          <div>
            Opção correta é a letra "
            {intToChar(
              currentItem.answers.find((x) => x.correct)?.id! - 1
            ).toUpperCase()}
            "
          </div>
          <span>{currentItem.explanation}</span>
        </Paragraph>
      )}
    </div>
  );
}
