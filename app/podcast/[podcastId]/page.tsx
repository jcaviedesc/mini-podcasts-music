type pageProps = {
  params: { podcastId: string };
};

export default function PodcastDetailPage({}: pageProps) {
  return <h1>Hello, podcast page</h1>;
}
