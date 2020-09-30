import React from "react";

export const ToDo = ({ text, todos, setTodos, todo }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo-wrap">
      <li
        className={`${"todo-wrap__text"}, ${
          todo.completed ? "completed" : " "
        }`}
      >
        {text}
      </li>

      <div className="todo-wrap__btn-wrap">
        <button
          className={"todo-wrap__button-completed todo-wrap__button"}
          onClick={completedHandler}
        >
          completed
        </button>
        <button
          className={"todo-wrap__button-delete todo-wrap__button"}
          onClick={deleteHandler}
        >
          delete
        </button>
      </div>
    </div>
  );
};
