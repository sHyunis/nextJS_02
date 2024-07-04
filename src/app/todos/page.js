import Link from 'next/link';
import React from 'react'

const getTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos'); // todos 가져오기
    const todos = await res.json();
    return todos;
}

const Todos = async () => {
    const todos = await getTodos();
  return (
    <div>
        {
            todos.map(item => <div key={item.id}>
                <Link href={`/todos/${item.id}`}>{item.title}</Link>
                <input type='checkbox' checked={item.completed} />
            </div>)
        }
    </div>
  )
}

export default Todos