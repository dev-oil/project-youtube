export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  fetchVideos = async (keyword: string): Promise<VideoType[]> => {
    return keyword ? this.searchBykeyword(keyword) : this.mostPopular();
  };

  private async searchBykeyword(keyword: string): Promise<VideoType[]> {
    const res = await this.apiClient.fetchVideos({
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
    const res = await this.apiClient.videos({
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword,
      },
    });
    return res.data.items;
  }
}
