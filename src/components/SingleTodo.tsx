import React from 'react'
import { Todo } from '../models/model';
interface Props {
    todo: string
}
const SingleTodo: React.FC<Props> = ({todo}) => {
  return (
    <div>{todo}</div>
  )
}

export default SingleTodo;