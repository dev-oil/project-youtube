import axios from 'axios';

export default class JsonYoutube {
  constructor() {}

  fetchVideos = async (keyword: string): Promise<VideoType[]> => {
    return keyword ? this.searchBykeyword(keyword) : this.mostPopular();
  };

  private async searchByKeyword(keyword: string): Promise<VideoType[]> {
    const res = await axios.get(`/videos/search.json`);
    return res.data.items.map((item: any) => ({
      ...item,
      id: item.id.videoId,
    }));
  }

  private async mostPopular(): Promise<VideoType[]> {
    const res = await axios.get(`/videos/search.json`);
    return res.data.items;
  }
}
