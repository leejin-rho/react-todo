import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Todo from "./components/Todo";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      text: " ",
      checked: true,
    },
    {
      id: 2,
      text: " ",
      checked: true,
    },
    {
      id: 3,
      text: " ",
      checked: false,
    },
  ]);

  return <Todo todos={todoList} />;
}

export default App;
