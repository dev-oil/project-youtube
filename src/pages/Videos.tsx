import { useParams } from 'react-router-dom';

const Videos = () => {
  const { keyword } = useParams<{ keyword?: string }>();

  return <h2>Videos {keyword ? `🔎${keyword}` : '🔥'} </h2>;
};

export default Videos;
