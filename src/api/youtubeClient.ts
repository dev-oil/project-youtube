import axios, { AxiosInstance } from 'axios';

export default class YoutubeClient {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: import.meta.env.VITE_YOUTUBE_API_KEY },
    });
  }

  async fetchVideos(params: any): Promise<VideoType[]> {
    const res = await this.httpClient.get('search', { params });
    return res.data.items;
  }

  async videos(params: any): Promise<VideoType[]> {
    const res = await this.httpClient.get('videos', { params });
    return res.data.items;
  }

  async channels(params: any): Promise<VideoType[]> {
    const res = await this.httpClient.get('channels', { params });
    return res.data.items;
  }
}
