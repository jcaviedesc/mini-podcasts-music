"use client";
import { useState } from "react";
import styles from "./search.module.css";
import { Podcast } from "../../../types/podcasts";
import { usePodcasts } from "../../_providers/podcasts";

export function SearchBar() {
  const { filterPodcasts, podcasts } = usePodcasts();
  const onSearch = (event: { target: { value: string } }) => {
    const searchValue = event.target.value.toLowerCase();
    filterPodcasts(searchValue);
  };

  return (
    <div className={styles.searchHeader}>
      <div className={styles.podcastSize}>
        <span>{podcasts.length}</span>
      </div>
      <input
        type="search"
        id="podcastsearch"
        name="podcastsearch"
        placeholder="Filter Podcast..."
        onChange={onSearch}
        className={styles.searchInput}
      />
    </div>
  );
}
