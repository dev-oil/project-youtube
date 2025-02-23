import { formatAgo } from '../util/date';
import Youtube from '../api/youtube';
import { useNavigate } from 'react-router-dom';

type VideoType = Awaited<ReturnType<Youtube['fetchVideos']>>[0];

interface VideoCardProps {
  video: VideoType;
  type: VideoType;
}

export const VideoCard = ({ video, type }: VideoCardProps) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === 'list';

  return (
    <li
      className={isList ? 'flex gap-1 m-2' : ''}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        className={isList ? 'w-60 mr-2' : 'w-full'}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
};

export default VideoCard;
