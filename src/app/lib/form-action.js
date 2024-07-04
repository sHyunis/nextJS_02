'use server'

// lib/form-action.js
export const createForm = async ( formData ) => {
    console.log( formData );
    // formData[Symbol] : 접근 불가
    // symbol 데이터타입은 직접 접근 못한다.
    // #
    // const title = formData.get('title');
    // const body = formData.get('body');
    // =
    const { title, body } = Object.fromEntries(formData); // 사실 심볼 형식의 데이터를 꺼내는 방식

    const newPost = {title, body};

    fetch('http://localhost:3000/api/board', {
      method : 'POST', // 외워야 함
      headers : { 'Content-Type' : 'application/json;charset=utf8' },
      body : JSON.stringify( newPost ) // 이것을 백엔드에 json 형식으로 받는다
    }).then(res => res.json())
    .then(res => {
        console.log('등록완료');
    })
}

export const deleteForm = async ( formData ) => {
    console.log( formData );
    const id = formData.get('id');

    fetch(`http://localhost:3000/api/board/${id}`, {
      method : 'DELETE',
    }).then(res => res.json())
    .then(res => {
        console.log('삭제완료');
    })
}

// FormData {
//     [Symbol(state)]: [
//       {
//         name: '$ACTION_ID_a0ec8599979d1efd0c53076a49d372a58087968f',
//         value: ''
//       },
//       { name: 'title', value: 'hello' },
//       { name: 'body', value: 'hello' },
//       { name: 'email', value: 'hello' },
//       { name: 'user_id', value: 'hello' },
//       { name: 'user_pwd', value: 'hello' }
//     ]
//   }



// 객체 : 순서대로 안되어 있다. (이터러블하지 않음)
// Object.keys()
// Object.values()
// Object.entries()
// Object.fromEntries() // entries로 부터 form데이터를 가져온다.