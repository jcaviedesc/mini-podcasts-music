"use client";
import { useState } from "react";
import styles from "./search.module.css";

export function SearchBar() {
  const [podcastsList, setPodcastList] = useState([]);
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
  );
}