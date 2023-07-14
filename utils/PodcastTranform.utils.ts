import { PodcastEpisodesResult } from "../types/podcasts";

export function episodeToPodcastDetail(episode: PodcastEpisodesResult) {
  return {
    podcastId: episode.collectionId,
    title: episode.collectionName,
    artistName: episode.artistName,
    description: episode.description,
    image: episode.artworkUrl600,
  };
}
