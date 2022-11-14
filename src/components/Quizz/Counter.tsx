import { H1 } from "../Header";

type CounterType = {
  current: number;
  total: number;
};
export const QuizzCounter: React.FC<CounterType> = ({ current, total }) => {
  return (
    <H1>
      {current}/{total}
    </H1>
  );
};
