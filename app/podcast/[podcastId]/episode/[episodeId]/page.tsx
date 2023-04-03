type pageProps = {
  params: { podcastId: string; episodeId: string };
};

export default function EpisodeDetailPage({}: pageProps) {
  return <h1>Hello, episode page</h1>;
}
