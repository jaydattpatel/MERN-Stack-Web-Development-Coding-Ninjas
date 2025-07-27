import { useSelector } from "react-redux";
import { counterSelector } from "../redux/reducers/counterReducer";

export const Count = () => {
  const { count } = useSelector(counterSelector);

  return <b>{count}</b>;
};
