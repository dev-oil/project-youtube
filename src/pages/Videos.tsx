import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { VideoCard } from '../components/VideoCard';
import axios from 'axios';

const fetchVideos = async (keyword?: string) => {
  const res = await axios.get(`/videos/${keyword ? 'search' : 'popular'}.json`);
  return res.data.items;
};

type VideoType = Awaited<ReturnType<typeof fetchVideos>>[0]; // Awaited<T>? Promise 내부의 실제 값을 가져오는 역할

const Videos = () => {
  const { keyword } = useParams<{ keyword?: string }>();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery<VideoType[]>({
    queryKey: ['videos', keyword],
    queryFn: () => fetchVideos(keyword), // fetchVideos 함수 사용
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
