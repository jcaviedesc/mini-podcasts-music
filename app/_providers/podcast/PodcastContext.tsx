import React from "react";
import { Podcast } from "../../../types/podcasts";

type PodcastContextValue = {
  podcast: Podcast | undefined;
  selectPodcast: (_podcast: Podcast) => void;
};

export const PodcastContext = React.createContext<PodcastContextValue>({
  podcast: undefined,
  selectPodcast: (_podcast: Podcast) => {
    /** noop */
  },
});
