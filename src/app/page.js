import Image from "next/image";
// 최적화된 기본 이미지 사용하는 법
// 1. public 폴더를 자동으로 인식함
// 2. Image 컴포넌트를 사용하는 법

import heart from '../images/Heart.png'
import { FcIdea } from "react-icons/fc"; // 리액트 아이콘

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1> Board Main </h1>

        <img src="/images/Heart.png" width="200px" />
        <Image src={heart} width={200} height={200} />
        <Image src='/images/Heart.png' width={200} height={200} />
        {/* 컴포넌트 방식을 height와 width를 꼭 써줘야 한다. */}
        <FcIdea />
        {/*  아이콘 찾아서 넣기 */}

        
    </main>
  );
}
