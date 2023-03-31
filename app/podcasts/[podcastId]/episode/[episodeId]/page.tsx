type pageProps = {
  params: { podcastId: string; episodeId: string };
};

export default function Page({}: pageProps) {
  return <h1>Hello, episode page</h1>;
}
