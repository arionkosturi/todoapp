import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodosList from './TodosList';

const initialState = [
  { id: 1, message: 'Todo 1' },
  { id: 2, message: 'Todo 2' },
  { id: 3, message: 'Todo 3' },
];

function Todos() {
  const [todoList, setTodoList] = useState(initialState);
  return (
    <div>
      <TodoForm todos={todoList} setTodos={setTodoList} />
      <TodosList todos={todoList} />
    </div>
  );
}

export default Todos;
