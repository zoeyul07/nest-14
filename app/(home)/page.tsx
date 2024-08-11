//react:ui빌드 와 다른것들
//react-dom: document object model(DOM)에 렌더링 하는 역할
"use client";
import { useEffect, useState } from "react";

//next.js가 시작하면 app 폴더 내에 page를 가장 먼저 찾는다.
//react 에서는 React-router를 이용해서 기본적인 어플리케이션 라우팅을 진행한다.
//url을 지정하고 home이라는 컴포넌트 render를 요청한다. 수동적

//next.js는 파일시스템을 이용해 url을 표현한다.

//client component 에서는 meta data 사용 불가능
//fetching은 클라이언트에서 일어남
// export const metadata = {
//   title: "Home",
// };

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(process.env.MOVIE_API);
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {isLoading ? "Loading..." : JSON.stringify(movies)}
      <h1>Home</h1>
    </div>
  );
}
