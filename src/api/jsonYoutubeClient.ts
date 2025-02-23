import axios from 'axios';

export default class JsonYoutubeClient {
  constructor() {}

  fetchVideos = async (): Promise<VideoType[]> => {
    return axios.get('/videos/search.json');
  };

  videos = async (): Promise<VideoType[]> => {
    return axios.get('/videos/popular.json');
  };
}
