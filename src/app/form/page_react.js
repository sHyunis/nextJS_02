'use client'
// localhost:3000/form
// react로 작업했던 방식 그대로 사용할 수 있음

import React, { useState } from 'react'

const ServerAction = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmitHandle = (ev) => {
      ev.preventDefault()
      fetch('http://localhost:3000/api/board', {
        method : 'POST', // 외워야 함
        headers : { 'Content-Type' : 'application/json;charset=utf8' },
        body : JSON.stringify( { title, body } ) // 이것을 백엔드에 json 형식으로 받는다
      }).then(res => res.json())
      .then(res => {
        setTitle('')
        setBody('')
      })
  }
  return (
    <form onSubmit={ (ev) => onSubmitHandle(ev) }>
        <input type='text' placeholder='title' onChange={(ev) => setTitle(ev.target.value)} />
        <input type='text' placeholder='body' onChange={(ev) => setBody(ev.target.value)} />
        <button>등록</button>
    </form>
  )
}

export default ServerAction