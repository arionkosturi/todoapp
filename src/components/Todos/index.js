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
  const deleteHandler = (id) => {
    const newTodos = todoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList(newTodos);
  };
  const updateHandler = (todo) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            message: todo.message,
          };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <div>
      <TodoForm todos={todoList} setTodos={setTodoList} />
      <TodosList
        todos={todoList}
        deleteHandler={deleteHandler}
        updateHandler={updateHandler}
      />
    </div>
  );
}

export default Todos;
