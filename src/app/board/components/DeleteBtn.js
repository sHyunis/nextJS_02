"use client"
import React from 'react'
// import { useRouter } from 'next/router'; // next.js ver13 page router 사용할때
import { useRouter } from 'next/navigation'; // next.js ver14 app router 사용할때
// react useNavigate() 역할 // 최상위 컴포넌트에서 사용 불가
// CSR 컴포넌트에서만 사용 가능 ( ver13 )


// 핸들러를 밖으로 빼거나
// fetch.then.then 처리

const DeleteBtn = ({ id }) => {
    const router = useRouter();

    const deleteBoardId = async (id) => {
      const url = `http://localhost:3000/api/board/${id}`
      const res = await fetch(url, {method : 'DELETE'});
  
      if( res.ok ){ //res가 ok명령어 상태라면
        router.push('/board'); // push 하면 이 주소로 가라
      }
    }

  return (
    <button onClick={() => deleteBoardId(id) }>삭제</button>
  )
}

export default DeleteBtn