type pageProps = {
  params: { podcastId: string };
};

async function getPoscastDetail(): Promise<Podcast> {
  const res = await fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
// ("https://itunes.apple.com/lookup?id={podcastId}");

export default function PodcastDetailPage({}: pageProps) {
  return <h1>Hello, podcast page</h1>;
}
