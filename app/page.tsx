import styles from "./page.module.css";
import { Podcast } from "../types/podcasts";
import { PodcastGrid } from "./components/podcast-grid";

async function getPoscasts(): Promise<Podcast> {
  const res = await fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// const onSearch = (event) => {};

export default async function Home() {
  const podcasts = await getPoscasts();
  return (
    // <main className={styles.main}>
    <PodcastGrid className={styles.main} podcasts={podcasts.feed.entry} />
    // </main>
  );
}
