import { formatAgo } from '../util/date';
import Youtube from '../api/youtube';

type VideoType = Awaited<ReturnType<Youtube['fetchVideos']>>[0];

interface VideoCardProps {
  video: VideoType;
}

export const VideoCard = ({ video }: VideoCardProps) => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      <img className='w-full' src={thumbnails.medium.url} alt={title} />
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
};

export default VideoCard;
