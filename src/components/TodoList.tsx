import React from 'react';
import "../components/styles.css";
import { Todo } from '../models/model';
import SingleTodo from './SingleTodo';
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <SingleTodo todo={todo.todoName}/>
      ))}
    </div>
  )
}

export default TodoList