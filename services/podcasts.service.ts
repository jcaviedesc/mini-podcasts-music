import { Podcast } from "../types/podcasts";

const API_HOST = process.env.PODCAST_API;

type PodcastsParams = {
  limit: number;
  genre: number;
};

const podcastService = {
  async getPodcast({ limit, genre }: PodcastsParams): Promise<Podcast> {
    const res = await fetch(
      `${API_HOST}/us/rss/toppodcasts/limit=${limit}/genre=${genre}/json`
    );
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  },
};

export default podcastService;
