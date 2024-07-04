// 'use server'
// localhost:3000/board/create : 글쓰기 페이지

export const metadata = {
  title: "Board Create",
  description: "Board next app",
};

const CreateBoard = async () => {
  return (
    <>
      <form action='/api/board' method="POST" >
        {/* DELETE, PUT, POST를 하나로 처리한다면 문제가 생길 수 있다 -> 제한적이다. */}
        <input type='text' placeholder='제목' name='title' />
        <input type='text' placeholder='내용' name='content' />
        <button>등록</button>
      </form>
    </>
  )
}

export default CreateBoard