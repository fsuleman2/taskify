import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./models/model";

const App: React.FC = () => {
  //state to hold the todo typed in textbox
  const [todo, setTodo] = useState<string>("");
  //state to hold all the todos along with details
  const [todos, setTodos] = useState<Todo[]>([]);

  //creating handle fun to add todos: also we use e: React.FormEvent to prevent the page from reloading
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); //to prevent the page from reloading
  }
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd = {handleAdd} />
    </div>
  );
};
export default App;
