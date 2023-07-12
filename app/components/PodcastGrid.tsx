import { PodcastListDetailCard } from "./podcast-card";
import styles from "../page.module.css";
import podcastService from "../../services/podcasts.service";

export default async function PodcastGrid() {
  const podcasts = await podcastService.listPodcasts({
    limit: 100,
    genre: 1310,
  });
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
