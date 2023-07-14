import React from "react";
import { PodcastEpisodesResult } from "../../../types/podcasts";

type EpisodeContextValue = {
  episode: PodcastEpisodesResult | undefined;
  selectEpisode: (_Episode: PodcastEpisodesResult) => void;
};

export const EpisodeContext = React.createContext<EpisodeContextValue>({
  episode: undefined,
  selectEpisode: (_Episode) => {
    /** noop */
  },
});
