//서버 컴포넌트는 백엔드에서 실행되기 때문에 console.log 찍으면 브라우저 콘솔에서는 보이지 않음

export default function MovieDetail({
  //hook 안써도 됨
  params: { id },
}: {
  params: { id: string };
}) {
  return <h1>Movie {id}</h1>;
}
