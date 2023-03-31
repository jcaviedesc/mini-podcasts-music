type pageProps = {
  params: { podcastId: string };
};

export default function Page({}: pageProps) {
  return <h1>Hello, podcast page</h1>;
}
