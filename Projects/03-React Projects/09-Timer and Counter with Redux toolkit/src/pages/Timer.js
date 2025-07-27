import { useDispatch, useSelector } from "react-redux";
import { TimerActions } from "../components/TimerActions";
import { Time } from "../components/Time";
import { alertSelector, resetAlert } from "../redux/reducers/alertReducer";

export const Timer = () => {
  const dispatch = useDispatch();
  const { message } = useSelector(alertSelector);

  if (message) {
    setTimeout(() => {
      dispatch(resetAlert());
    }, 2000);
  }

  return (
    <div className="page">
      {message && <div className="alert">{message}</div>}
      <h1>Timer</h1>
      <Time />
      <TimerActions />
    </div>
  );
};
