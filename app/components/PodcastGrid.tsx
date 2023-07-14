"use client";
import { PodcastListDetailCard } from "./podcast-card";
import styles from "../page.module.css";
import { usePodcasts } from "../_providers/podcasts";

export default function PodcastGrid() {
  const { podcasts } = usePodcasts();
  return (
    <div className={styles.grid}>
      {podcasts.map((podcast) => (
        <PodcastListDetailCard
          key={podcast.id.attributes["im:id"]}
          {...podcast}
        />
      ))}
    </div>
  );
}
