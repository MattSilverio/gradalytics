import { Button } from "../../components/Button";
import { H1, H2 } from "../../components/Header";
import { Paragraph } from "../../components/Paragraph";
import { QuizzButton } from "../../components/Quizz/Button";
import { QuizzCounter } from "../../components/Quizz/Counter";

const questions = [
  {
    id: 1,
    question: "What's the bla?",
    answers: [
      { id: 1, text: "Bla", correct: false },
      { id: 2, text: "Bla2", correct: false },
      { id: 3, text: "Bla3", correct: false },
      { id: 4, text: "Bla4", correct: true },
    ],
  },
];

export function Main() {
  const onClick = (correct: boolean) => {
    if (correct) return console.log("YEAAAAAAH!!!!");
    return console.log("WRONG");
  };

  return (
    <div>
      <QuizzCounter current={1} total={questions.length} />
      <H2>Hello</H2>
      <Paragraph>Helloooo</Paragraph>
      <div className="w-full grid gap-2 my-4 justify-items-center">
        {questions[0].answers.map((x) => {
          return (
            <QuizzButton key={x.id} onClick={() => onClick(x.correct)}>
              {x.text}
            </QuizzButton>
          );
        })}
      </div>
      <Button previous>{"<"} Anterior</Button>
      <Button next>Próximo {">"} </Button>
    </div>
  );
}
