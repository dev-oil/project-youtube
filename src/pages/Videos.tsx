import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { VideoCard } from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import JsonYoutube from '../api/jsonYoutubeClient';

type VideoType = Awaited<ReturnType<JsonYoutube['fetchVideos']>>[0]; // Awaited<T>? Promise 내부의 실제 값을 가져오는 역할

const Videos = () => {
  const { keyword } = useParams<{ keyword?: string }>();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery<VideoType[]>({
    queryKey: ['videos', keyword],
    queryFn: () => youtube.fetchVideos(keyword), // fetchVideos 함수 사용
  });

  return (
    <>
      <h2>Videos {keyword ? `🔎${keyword}` : '🔥'} </h2>;
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong!</p>}
      {videos && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;
