import { Fragment } from "react";
import { Button } from "../../components/Button";
import { H1, H2 } from "../../components/Header";
import { Paragraph } from "../../components/Paragraph";
import { QuizzButton } from "../../components/QuizzButton";

export function Main() {
  return (
    <div>
      <H1>Hello</H1>
      <H2>Hello</H2>
      <Paragraph>Helloooo</Paragraph>
      <div className="w-full">
        <QuizzButton correct={false}>Blaa</QuizzButton>
      </div>
      <Button previous>{"<"} Anterior</Button>
      <Button next>Próximo {">"} </Button>
    </div>
  );
}
