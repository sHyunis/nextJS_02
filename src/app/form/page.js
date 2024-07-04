// 'use server'
// localhost:3000/form
// src/app/form/page.js
// import React from 'react'
import { createForm, deleteForm } from '../lib/form-action'
// formData는 id가 아닌 name으로 동작하니 name은 꼭 넣어주자


const ServerAction = async () => {
  return (
    <>
      <form action={ createForm }>
        <input type='text' placeholder='title' name='title' />
        <input type='text' placeholder='body' name='body' />
        <input type='text' placeholder='email' name='email' />
        <input type='text' placeholder='user_id' name='user_id' />
        <input type='text' placeholder='user_pwd' name='user_pwd' />
        <button>등록</button>
      </form>
      <form action={ deleteForm }>
        <input type='text' placeholder='id' name='id' />
        <button>삭제</button>
      </form>
    </>
  )
}

export default ServerAction