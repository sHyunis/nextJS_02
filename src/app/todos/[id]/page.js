import React from 'react'

const getTodo = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const res = await fetch(url);
    const todo = await res.json();
    return todo;
}

const Todo = async ({ params }) => {
    const { id } = params;

    const todo = await getTodo(id);
  return (
    <div>
        <h1> { todo.id } </h1>
        <h1> { todo.title } </h1>
        <h1> { todo.completed ? "완료" : "진행중" }  </h1>
    </div>
  )
}

export default Todo