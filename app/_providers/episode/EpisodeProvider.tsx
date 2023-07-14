"use client";

import { useContext, useMemo, useRef, useState } from "react";
import { EpisodeContext } from "./EpisodeContext";
import { PodcastEpisodesResult } from "../../../types/podcasts";

type PodcastProviderProps = {
  children: React.ReactNode;
  initialEpisode?: PodcastEpisodesResult;
};

export function EpisodeProvider({
  children,
  initialEpisode,
}: PodcastProviderProps) {
  const [selectedEpisode, setSelectedEpisode] = useState<
    PodcastEpisodesResult | undefined
  >(initialEpisode);

  const value = useMemo(
    () => ({
      episode: selectedEpisode,
      selectEpisode: setSelectedEpisode,
    }),
    [selectedEpisode]
  );

  return (
    <EpisodeContext.Provider value={value}>{children}</EpisodeContext.Provider>
  );
}

export function useEpisode() {
  const contextData = useContext(EpisodeContext);
  return contextData;
}
