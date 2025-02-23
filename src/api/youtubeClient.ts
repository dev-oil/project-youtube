import axios from 'axios';

export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: import.meta.env.VITE_YOUTUBE_API_KEY },
    });
  }

  fetchVideos = async (params): Promise<VideoType[]> => {
    return this.httpClient.get('search', params);
  };
  videos = async (params): Promise<VideoType[]> => {
    return this.httpClient.get('videos', params);
  };
}
