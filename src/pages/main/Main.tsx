import { Fragment } from "react";
import { Button } from "../../components/Button";

export function Main() {
  return (
    <Fragment>
      <Button previous>{"<"} Anterior</Button>
      <Button next>Próximo {">"} </Button>
    </Fragment>
  );
}
