import Image from "next/image";
import { Podcast } from "../../../types/podcasts";
import styles from "./styles.module.css";
import { PodcastLink } from "../PodcastLink";

export const PodcastListDetailCard = (podcast: Podcast) => {
  const podcastImage =
    podcast["im:image"].length > 2
      ? podcast["im:image"][2].label
      : podcast["im:image"][0].label;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={podcastImage}
          alt={podcast["im:name"].label}
          width={96}
          height={96}
        />
      </div>
      <PodcastLink
        href={`podcast/${podcast.id.attributes["im:id"]}`}
        podcast={podcast}
      >
        <div className={styles.card}>
          <h3>{podcast["im:name"].label}</h3>
          <span>Author: {podcast["im:artist"].label}</span>
        </div>
      </PodcastLink>
    </div>
  );
};
