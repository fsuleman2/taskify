import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./models/model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  //state to hold the todo typed in textbox
  const [todo, setTodo] = useState<string>("");
  //state to hold all the todos along with details
  const [todos, setTodos] = useState<Todo[]>([]);

  //creating handle fun to add todos: also we use e: React.FormEvent to prevent the page from reloading
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); //to prevent the page from reloading
    if (todo) {
      //if todo exist will store whatever there in todo + set all the attributes
      setTodos([...todos, { id: Date.now(), todoName: todo, isDone: false }]);
      //clearing the todo after adding
      setTodo("");
    }
  };
  console.log(todos);
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};
export default App;
