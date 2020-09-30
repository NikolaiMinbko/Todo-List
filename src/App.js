import React, { useState, useEffect } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { ToDoList } from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  //RENDER ONCE
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

  return (
    <div className="todo-wrapper">
      <header className="header">
        <h1 className="header__title">My Todos</h1>
      </header>
      <main className="main-wrapper">
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
        />
        <ToDoList todos={todos} setTodos={setTodos} />
      </main>
    </div>
  );
}

export default App;
