// src/app/api/board/route.js
// localhost:3000/api/board
// mariadb 사용
// route.js에서 연동

import { boards } from '../model/boardData' // 맨 처음에만 읽어오기에 새로 업데이트가 안된다.
import datas from '../model/boardData.json' 
// javascript로 자동 parse

import { redirect } from 'next/navigation';
export async function GET(){
    // console.log('datas: ' , datas);
    // javascript 자동 parse
    return Response.json(boards) // json으로 리턴 끝 
}

import fs from 'fs'
import path from 'path'
// // 1.
// export async function POST(request){
//     const { title, content } = await request.json();  // fetch해서 json 데이터로 넘겨줄때는 이렇게
//     console.log(title, content);



//     const newBoard = { id : `${boards.length + 1}`, title, content }
//     boards.push(newBoard);
//     const filePath = path.join(process.cwd(), 'src/app/api/model', 'boardData.js') 
//     fs.writeFileSync(filePath, `export const boards = ${JSON.stringify(boards, null, 4)}`, 'utf-8') 


    
//     return Response.json(newBoard) 
// }



// 2.
// export async function POST(request){
//     const body = await request.json()
    
//     console.log(body);
    
//     return Response.json(body) 
// }
// 출력 형식
// {
//     "title" : "html",
//     "content" : "html content ..."
// },


// 3. api/board/route.js

export async function POST(request){

    const formData = await request.formData(); // form으로부터 데이터를 가져올땐 이렇게
    // console.log(formData);

    // FormData {
    //     [Symbol(state)]: [
    //       { name: 'title', value: 'CSR' },
    //       { name: 'content', value: 'Client Side Rendering' }
    //     ]
    //   }

    const { title, content } = Object.fromEntries( formData )

    const newBoard = { id : `${boards.length + 1}`, title, content }
    boards.push(newBoard);
    const filePath = path.join(process.cwd(), 'src/app/api/model', 'boardData.js') 
    fs.writeFileSync(filePath, `export const boards = ${JSON.stringify(boards, null, 4)}`, 'utf-8') 


    
    return Response.json(null, { // 데이터는 안보낸다 
        status : 302, // 게시판 페이지로 보내는 상태 숫자, 게시판 목록을 보여줘라
        headers : {
            Location : '/board', // board로 라우팅 되어라
        }
    }) 
    // {"id":"6","title":"CSR","content":"Client Side Rendering"}
}