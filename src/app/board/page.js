'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

// src/app/board/page.js
// localhost:3000/board
// localhost:3000/api/board
// 서버페이지
// 내 로컬에서 데이터 읽기


const Boards = () => {
  // const boards = await getBoards();
  // 이 부분이 useState()로 바뀜

  const [ boards, setBoards ] = useState([]);

  const getBoards = async () => {
    const url = `http://localhost:3000/api/board`
    const res = await fetch(url);
    const boards = await res.json();
  
    setBoards(boards);
    // return boards;
  }

  useEffect(() => {
    getBoards();
    // fetch('http://localhost:3000/api/board')
    // .then(res => res.json())
    // .then(res => setBoards(res))
  }, [])

  return (
    <div>
      <h1>Boards</h1>
      {
        boards.map((item) => (
          <div key={item.id}
               style={{display: "flex"}}
          >
            {/* <a href={`/board/${item.id}`} style={{color: "red"}}>{item.id}: {item.title}</a> */}
            <Link href={`/board/${item.id}`} style={{color: "red"}}>{item.id}: {item.title}</Link>
            <p>{item.content}</p>
          </div>
        ))
      }
    </div>
  )
}

// 1. api/board 사용법과 같이 사용할 수 있음.
// import { boards } from '../api/model/boardData'
// const Boards = () => {
//   return (
//     <div>
//       <h1>Boards</h1>
//       {
//         boards.map((item) => (
//           <div key={item.id}
//                style={{display: "flex"}}
//           >
//             <h2 style={{color: "red"}}>{item.id}: {item.title}</h2>
//             <p>{item.content}</p>
//           </div>
//         ))
//       }
//     </div>
//   )
// }

export default Boards