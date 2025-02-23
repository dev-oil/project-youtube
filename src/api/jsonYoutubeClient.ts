import axios from 'axios';

export default class JsonYoutubeClient {
  async fetchVideos(): Promise<VideoType[]> {
    const res = await axios.get('/videos/search.json');
    return res.data.items;
  }

  async videos(): Promise<VideoType[]> {
    const res = await axios.get('/videos/popular.json');
    return res.data.items;
  }
}
