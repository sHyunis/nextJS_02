'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation';

// 화면단(UI):          src/app/board/[id]/edit/page.js
// 데이터처리단(Server): src/app/api/board/[id]/route.js
// localhost:3000/board/[id]/edit
// localhost:3000/board/1/edit
// localhost:3000/board/2/edit

// localhost:3000/board/[id]/edit/[id] //이렇게 중복되면 뒤엣것만 찾아온다. 그래서 다른 이름으로 해줘야 한다.
// localhost:3000/board/[id]/edit/[productId] // 이렇게 다른 이름으로 해줘야함
const Edit = ({ params }) => {
    const router = useRouter();
    const { id } = params;
    const [ isEdit, setIsEdit ] = useState(true); //true면 저장 false면 취소
    const [ board, setBoard ] = useState({});
    const titleRef = useRef();

    const [ title, setTitle ] = useState("");
    const [ content, setContent ] = useState("");

    const gotoBoard = () => {
      router.push('/board');
    }

    useEffect(() => {
      fetch(`http://localhost:3000/api/board/${id}`)
      .then(res => res.json())
      .then(res => {
          setBoard(res) // board 초기화 시킴
          titleRef.current.focus()
      })
    }, [])

    // error
    // useEffect(() => {
    //   if(id > 100){
    //     router.push('/board')
    //   }
    // }, [id])

    const titleHandle = (ev) => {
      setTitle(ev.target.value)
      const data = { ...board, title : ev.target.value}
      setBoard(data)
    }
    const contentHandle = (ev) => {
      setContent(ev.target.value)
      const data = { ...board, content : ev.target.value}
      setBoard(data)
    }

    const editSaveHandle = () => {
      fetch(`http://localhost:3000/api/board/${id}`,{
        method : 'PUT',
        headers : { 'Content-Type' : 'application/json;charset=utf8' },
        body : JSON.stringify(board)
      }).then(res => res.json())
      .then(res => gotoBoard())
    }
  return (
    <div> 
      <h1>Edit { id }</h1>
      {
        board && <>
            <input  type='text'
                    value={ board.title }
                    ref={titleRef} 
                    onChange={(ev) => titleHandle(ev)}
            /> <br/>
            <input type='text' 
                   value={board.content} 
                   onChange={(ev) => contentHandle(ev)}
            />
        </>
      }
      {
        isEdit ? 
        <button onClick={editSaveHandle}>저장</button> 
        : <button onClick={gotoBoard}>취소</button> 
      }
    </div>
  )
}

export default Edit