'use client'

// localhost:3000/test-route
// useRouter 테스트 목적
import { useRouter } from "next/navigation"
// client 에서 라우트 이동하고 싶을때

// server 단에서 route 이동할 때 redirect 
// import { redirect } from "next/navigation"
// redirect('/api/board')
import './button.css'

const TestRoute = () => {
    const router = useRouter();

    const handleReload = () => {
        router.reload();
        // 브라우저의 F5와 동일한 처리
    }
  return (
    <div>
        <h1>TestRoute</h1>
        <button onClick={ () => router.push('/board') }> /board </button>
        {/* push는 브라우저의 히스토리에 등록을 한다. */}
        <button onClick={ () => router.replace('/board') }> /replace </button>
        {/* replace 브라우저의 히스토리에 등록하지 않는다. */}
        <button onClick={ handleReload }> /reload </button>
        {/* 현재 페이지를 다시 읽어들임 */}
        <button onClick={ () => router.refresh() }> /refresh </button>
        {/* 데이터 fetching 과 같은 데이터 동작을 다시 불러들이고 싶을때 사용, 빨리갱신 */}
        <button onClick={ () => router.prefetch('/board') }> /prefetch </button>
        {/* 미리 읽어오기를 해두는 작업, next.js는 기본적으로 prefetch 동작을 한다. 이미지를 미리 읽어와서 빠르게 동작하고 싶을때 등 */}




        <button onClick={ () => router.back() }> back </button>
        <button onClick={ () => router.forward() }> forward </button>
        {/* 브라우저속 자바스크립트에 history라는 객체가 있는데 여기에 내가 간 정보들이 저장이 된다. */}
        {/* back()은 하나 뒤로 가기 -3은 3번 뒤로가기 */}
        {/* forward()는 앞으로 가기 +3은 3번 앞으로 가기 */}
    </div>
  )
}

export default TestRoute