import React from "react";
import { ToDo } from "./ToDo";

export const ToDoList = ({ todos, setTodos }) => {
  return (
    <ul className="todo-box">
      {todos.map((todo) => (
        <ToDo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          text={todo.text}
        />
      ))}
    </ul>
  );
};
