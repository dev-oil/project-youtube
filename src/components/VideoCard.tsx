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
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
};

export default VideoCard;
