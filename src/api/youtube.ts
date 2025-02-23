import axios from 'axios';

export const fetchVideos = async (keyword?: string) => {
  const res = await axios.get(`/videos/${keyword ? 'search' : 'popular'}.json`);
  return res.data.items;
};
