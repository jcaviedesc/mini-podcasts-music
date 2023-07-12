import { Podcast, PodcastEpisodes, Toppodcasts } from "../types/podcasts";

const API_HOST = process.env.PODCAST_API;

type PodcastsParams = {
  limit: number;
  genre: number;
};

const podcastService = {
  async listPodcasts({ limit, genre }: PodcastsParams): Promise<Podcast[]> {
    const res = await fetch(
      `${API_HOST}/us/rss/toppodcasts/limit=${limit}/genre=${genre}/json`
    );
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    const {
      feed: { entry: podcasts },
    } = (await res.json()) as Toppodcasts;

    return podcasts;
  },
  async getPodcast({ id }: { id: number }): Promise<PodcastEpisodes> {
    const res = await fetch(
      `${API_HOST}/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
    );
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    return res.json();
  },
};

export default podcastService;
