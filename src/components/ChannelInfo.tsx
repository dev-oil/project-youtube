import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export const ChannelInfo = ({ id, name }) => {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery({
    queryKey: ['channel', id],
    queryFn: () => youtube.channelImageURL(id),
  });

  return (
    <div>
      {url && <img src={url} alt={name} />}
      <p>{name}</p>
    </div>
  );
};
