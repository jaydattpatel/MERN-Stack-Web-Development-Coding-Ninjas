import "./ToDoList.css";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  todoActions,
  todoSelector,
  getTodoInitialState,
} from "../../redux/reducers/todoReducer";

function ToDoList() {
  // using useSelector get store data
  const { todos } = useSelector(todoSelector);
  // creating dispatch to perform action
  const dispatch = useDispatch();

  useEffect(() => {
    // calling and passing asyncThunk function to get data
    dispatch(getTodoInitialState("ArgumentSample"));
  }, []);

  return (
    <div className="container">
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span className="content">{todo.text}</span>
            <span className={todo.completed ? "completed" : "pending"}>
              {todo.completed ? "Completed" : "Pending"}
            </span>
            <button
              className="btn btn-warning"
              onClick={() => {
                // passing action with parameters
                dispatch(todoActions.toggle(index));
              }}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
