import React from "react";

export const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
    }
    setInputText("");
  };
  return (
    <form className="form-wrapper">
      <input
        value={inputText}
        onChange={inputTextHandler}
        className="form__input"
        type="text"
      />
      <button onClick={submitHandler} className="form__add-btn">
        Add
      </button>
    </form>
  );
};
