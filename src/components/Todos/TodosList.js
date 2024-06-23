import React from 'react';
import Todo from './Todo';

function TodosList({ todos, deleteHandler, updateHandler }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
            deleteHandler={deleteHandler}
            updateHandler={updateHandler}
          />
        );
      })}
    </div>
  );
}

export default TodosList;
