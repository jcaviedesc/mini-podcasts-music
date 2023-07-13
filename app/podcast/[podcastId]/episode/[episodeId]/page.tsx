"use client";

import { useEpisode } from "../../../../_providers/episode";

type pageProps = {
  params: { podcastId: string; episodeId: string };
};

export default function EpisodeDetailPage({}: pageProps) {
  const { episode } = useEpisode();
  return <h1>Hello, episode page</h1>;
}
