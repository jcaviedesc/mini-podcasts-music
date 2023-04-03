import Image from "next/image";
import styles from "./page.module.css";
import { Podcast } from "../types/podcasts";
import { PodcastListDetailCard } from "./components/podcast-card";

async function getPoscasts(): Promise<Podcast> {
  const res = await fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const podcasts = await getPoscasts();
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {podcasts.feed.entry.map((podcast) => (
          <PodcastListDetailCard
            key={podcast.id.attributes["im:id"]}
            {...podcast}
          />
        ))}
      </div>
    </main>
  );
}
