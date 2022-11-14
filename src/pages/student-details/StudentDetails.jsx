import { Fragment } from "react";
import { H1, H2 } from "../../components/Header";
import { Paragraph } from "../../components/Paragraph";

export function StudentDetails() {
  return (
    <div className="m-10">
      <H2>Resultado</H2>
      <div className="w-fit flex flex-col items-center justify-center my-28 mx-auto">
        <div>
          <H1 className="text-8xl">80%</H1>
        </div>
        <span className="ml-auto font-bold text-xl">8/10</span>
      </div>

      <Paragraph className="font-bold text-xl">💡 Sugestões</Paragraph>
      <ul className="[&>*]:ml-6">
        <li className="mt-4">
          Estude isso aqui (
          <a className="text-blue-500" href="#">
            LINK
          </a>
          ) para um melhor desempenho em #Algoritmos
        </li>
        <li className="mt-4">
          Estude isso aqui (
          <a className="text-blue-500" href="#">
            LINK
          </a>
          ) para um melhor desempenho em #Cálculo
        </li>
      </ul>
    </div>
  );
}
