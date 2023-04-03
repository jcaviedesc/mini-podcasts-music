"use client";

import { useState } from "react";
import { PodcastListDetail } from "../../../types/podcasts";
import { PodcastListDetailCard } from "../podcast-card";
import styles from "../../page.module.css";

type PodcastListProps = {
  className: string;
  podcasts: PodcastListDetail[];
};

export const PodcastGrid = ({ className, podcasts }: PodcastListProps) => {
  const [podcastsList, setPodcastList] = useState(podcasts);
  const onSearch = (event: { target: { value: string } }) => {
    const searchValue = event.target.value.toLowerCase();
    if (searchValue === "") {
      setPodcastList(podcasts);
    } else {
      const filteredPodcasts = podcastsList.filter(
        (podcasts) =>
          podcasts["im:artist"].label.toLowerCase().includes(searchValue) ||
          podcasts["im:name"].label.toLowerCase().includes(searchValue)
      );
      setPodcastList(filteredPodcasts);
    }
  };
  return (
    <div className={className}>
      <div className={styles.searchHeader}>
        <div className={styles.podcastSize}>
          <span>{podcastsList.length}</span>
        </div>
        <input
          type="search"
          id="podcastsearch"
          name="podcastsearch"
          placeholder="Filter Podcast..."
          onChange={onSearch}
        />
      </div>
      <div className={styles.grid}>
        {podcastsList.map((podcast) => (
          <PodcastListDetailCard
            key={podcast.id.attributes["im:id"]}
            {...podcast}
          />
        ))}
      </div>
    </div>
  );
};
