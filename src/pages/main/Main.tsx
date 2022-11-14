import { useState } from "react";
import { Button } from "../../components/Button";
import { H1, H2 } from "../../components/Header";
import { Paragraph } from "../../components/Paragraph";
import { QuizzButton } from "../../components/Quizz/Button";
import { QuizzCounter } from "../../components/Quizz/Counter";

const questions = [
  {
    id: 1,
    question: "PRIMEIRA",
    explanation: "This is the explanation",
    answers: [
      { id: 1, text: "Bla", correct: false },
      { id: 2, text: "Bla2", correct: false },
      { id: 3, text: "Bla3", correct: false },
      { id: 4, text: "Bla4", correct: true },
    ],
  },
  {
    id: 2,
    question: "SEGUNDA",
    explanation: "This is another explanation",
    answers: [
      { id: 1, text: "FSDF", correct: false },
      { id: 2, text: "REWRWE", correct: false },
      { id: 3, text: "65465", correct: false },
      { id: 4, text: "645645", correct: true },
    ],
  },
  {
    id: 2,
    question: "SEGUNDA",
    explanation: "This is another explanation",
    answers: [
      { id: 1, text: "FSDF", correct: false },
      { id: 2, text: "REWRWE", correct: false },
      { id: 3, text: "65465", correct: false },
      { id: 4, text: "645645", correct: true },
    ],
  },
  {
    id: 2,
    question: "SEGUNDA",
    explanation: "This is another explanation",
    answers: [
      { id: 1, text: "FSDF", correct: false },
      { id: 2, text: "REWRWE", correct: false },
      { id: 3, text: "65465", correct: false },
      { id: 4, text: "645645", correct: true },
    ],
  },
  {
    id: 2,
    question: "SEGUNDA",
    explanation: "This is another explanation",
    answers: [
      { id: 1, text: "FSDF", correct: false },
      { id: 2, text: "REWRWE", correct: false },
      { id: 3, text: "65465", correct: false },
      { id: 4, text: "645645", correct: true },
    ],
  },
];

type StudentAnswers = {
  questionId: number;
  isCorrect: boolean;
}[];

var newObj = questions.map((x) => ({ ...x, isAnswered: false }));

export function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean>();
  const [students, setStudents] = useState<StudentAnswers>([]);

  const [data, setData] = useState(newObj);

  const nextPage = () => setCurrentIndex(currentIndex + 1);
  const previousPage = () => setCurrentIndex(currentIndex - 1);

  const onClick = (correct: boolean) => {
    let newArr = [...data];
    newArr[currentIndex].isAnswered = true;
    setData(newArr);

    if (correct) {
      return setStudents([
        ...students,
        { isCorrect: true, questionId: currentIndex },
      ]);
    }
    return setStudents([
      ...students,
      { isCorrect: false, questionId: currentIndex },
    ]);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <QuizzCounter current={currentIndex + 1} total={newObj.length} />
      <H2>{newObj[currentIndex].question}</H2>
      <div className="w-full grid gap-2 my-4 justify-items-center">
        {newObj[currentIndex].answers.map((x) => {
          return (
            <QuizzButton
              disabled={data[currentIndex].isAnswered}
              key={x.id}
              onClick={() => onClick(x.correct)}
            >
              {x.text}
            </QuizzButton>
          );
        })}
      </div>
      <div className="flex gap-2">
        <Button previous onClick={previousPage} disabled={currentIndex === 0}>
          {"<"} Anterior
        </Button>
        {data[currentIndex].isAnswered && (
          <Button
            next
            onClick={nextPage}
            disabled={currentIndex + 1 >= newObj.length}
          >
            Próximo {">"}{" "}
          </Button>
        )}
      </div>
      {data[currentIndex].isAnswered && (
        <Paragraph correct={students[currentIndex].isCorrect}>
          {data[currentIndex].explanation}
        </Paragraph>
      )}
    </div>
  );
}
