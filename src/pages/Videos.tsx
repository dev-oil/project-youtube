import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { VideoCard } from '../components/VideoCard';

interface VideoType {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
}

const Videos = () => {
  const { keyword } = useParams<{ keyword?: string }>();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery<VideoType[]>({
    queryKey: ['videos', keyword],
    queryFn: async () => {
      const response = await fetch(
        `/videos/${keyword ? 'search' : 'popular'}.json`
      );
      if (!response.ok) {
        throw new Error('실패 fetch videos');
      }
      const data = await response.json();
      return data.items as VideoType[];
    },
  });

  return (
    <>
      <h2>Videos {keyword ? `🔎${keyword}` : '🔥'} </h2>;
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong!</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;
