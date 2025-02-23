import axios from 'axios';

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: { key: import.meta.env.VITE_YOUTUBE_API_KEY },
    });
  }

  fetchVideos = async (keyword: string): Promise<VideoType[]> => {
    return keyword ? this.searchBykeyword(keyword) : this.mostPopular();
  };

  private async searchBykeyword(keyword: string): Promise<VideoType[]> {
    const res = await this.httpClient.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword,
      },
    });
    return res.data.items.map((item: any) => ({
      ...item,
      id: item.id.videoId,
    }));
  }

  private async mostPopular(): Promise<VideoType[]> {
    const res = await this.httpClient.get('videos', {
      params: {
        part: 'snippet',
        maxResults: 25,
        chart: 'mostPopular',
      },
    });
    return res.data.items;
  }
}
