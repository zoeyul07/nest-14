async function getVideos(id: string) {
  const response = await fetch(`${process.env.MOVIE_API}/${id}/videos`);
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return <h6>{JSON.stringify(videos)}</h6>;
}
