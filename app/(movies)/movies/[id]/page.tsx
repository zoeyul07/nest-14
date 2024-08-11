//서버 컴포넌트는 백엔드에서 실행되기 때문에 console.log 찍으면 브라우저 콘솔에서는 보이지 않음

import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
  //hook 안써도 됨
  params: { id },
}: {
  params: { id: string };
}) {
  //promise all 없이 그냥 실행하면 getMovie가 실행된 다음에 실행된다.

  //suspense에는 fallback props이 있는데, 컴포넌트가 await 되는 동안 표시할 메세지를 Render 할 수 있도록 해준다.
  return (
    <h1>
      <h3>movie detail page</h3>
      <Suspense fallback={<h1>loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <h4>Videos</h4>
      <Suspense fallback={<h1>loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </h1>
  );
}
