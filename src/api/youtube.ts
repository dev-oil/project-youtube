export default class Youtube {
  private apiClient: any;

  constructor(apiClient: any) {
    this.apiClient = apiClient;
  }

  async fetchVideos(keyword?: string): Promise<VideoType[]> {
    return keyword ? this.searchByKeyword(keyword) : this.mostPopular();
  }

  async channelImageURL(id: string): Promise<string | undefined> {
    const res = await this.apiClient.channels({
      part: 'snippet',
      id,
    });

    return res[0].snippet.thumbnails.default.url;
  }

  async relatedVideos(channelId: string): Promise<string | undefined> {
    const res = await this.apiClient.fetchVideos({
      part: 'snippet',
      maxResults: 25,
      order: 'date',
      type: 'video',
      channelId,
    });

    return res.map((item: any) => ({
      ...item,
      id: item.id.videoId,
    }));
  }

  private async searchByKeyword(keyword: string): Promise<VideoType[]> {
    const res = await this.apiClient.fetchVideos({
      part: 'snippet',
      maxResults: 25,
      type: 'video',
      q: keyword,
    });

    return res.map((item: any) => ({
      ...item,
      id: item.id.videoId,
    }));
  }

  private async mostPopular(): Promise<VideoType[]> {
    return await this.apiClient.videos({
      part: 'snippet',
      maxResults: 25,
      chart: 'mostPopular',
    });
  }
}
