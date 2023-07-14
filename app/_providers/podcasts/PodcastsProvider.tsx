"use client";

import { useCallback, useContext, useMemo, useRef, useState } from "react";
import { PodcastsContext } from "./PodcastsContext";
import { Podcast, PodcastEpisodesResult } from "../../../types/podcasts";

type PodcastProviderProps = {
  children: React.ReactNode;
  podcasts: Podcast[];
};

export function PodcastsProvider({ children, podcasts }: PodcastProviderProps) {
  const initialPodcasts = useRef(podcasts).current;
  const [podcastsList, setPodcastList] = useState(podcasts);

  const onSearch = useCallback((queryValue: string) => {
    const rawQueryValue = queryValue.toLowerCase();
    if (rawQueryValue === "") {
      setPodcastList(initialPodcasts);
    } else {
      const filteredPodcasts = (podcastsListState: Podcast[]) =>
        podcastsListState.filter(
          (podcasts) =>
            podcasts["im:artist"].label.toLowerCase().includes(rawQueryValue) ||
            podcasts["im:name"].label.toLowerCase().includes(rawQueryValue)
        );
      setPodcastList(filteredPodcasts);
    }
  }, []);

  const value = useMemo(
    () => ({
      podcasts: podcastsList,
      filterPodcasts: onSearch,
    }),
    [onSearch, podcastsList]
  );

  return (
    <PodcastsContext.Provider value={value}>
      {children}
    </PodcastsContext.Provider>
  );
}

export function usePodcasts() {
  const contextData = useContext(PodcastsContext);
  return contextData;
}
