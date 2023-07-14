import React from "react";
import { Podcast, PodcastEpisodesResult } from "../../../types/podcasts";

type PodcastsContextValue = {
  podcasts: Podcast[];
  filterPodcasts: (queryText: string) => void;
};

export const PodcastsContext = React.createContext<PodcastsContextValue>({
  podcasts: [],
  filterPodcasts: (_queryText) => {
    /** noop */
  },
});
