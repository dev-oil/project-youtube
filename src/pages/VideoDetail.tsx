import { useLocation } from 'react-router-dom';
import { ChannelInfo } from '../components/ChannelInfo';
import { RelatedVideos } from '../components/RelatedVideos';
import Youtube from '../api/youtube';

type VideoType = Awaited<ReturnType<Youtube['fetchVideos']>>[0];

const VideoDetail = () => {
  const { state } = useLocation();
  const video: VideoType = state.video;
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section>
      <article>
        <iframe
          id='player'
          type='text/html'
          width='100%'
          height='640'
          src={`http://www.youtube.com/embed/${video.id}`}
          frameBorder='0'
        ></iframe>
        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre>{description}</pre>
        </div>
      </article>
      <article>
        <RelatedVideos id={video.id} />
      </article>
    </section>
  );
};

export default VideoDetail;
