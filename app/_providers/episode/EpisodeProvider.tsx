"use client";

import { useContext, useMemo, useState } from "react";
import { EpisodeContext } from "./EpisodeContext";
import { Podcast, PodcastEpisodesResult } from "../../../types/podcasts";

type PodcastProviderProps = {
  children: React.ReactNode;
  initialValue?: PodcastEpisodesResult;
};

export function EpisodeProvider({
  children,
  initialValue,
}: PodcastProviderProps) {
  const [selectedEpisode, setSelectedEpisode] = useState<
    PodcastEpisodesResult | undefined
  >(initialValue);

  const value = useMemo(
    () => ({
      episode: selectedEpisode,
      selectEpisode: setSelectedEpisode,
    }),
    [selectedEpisode]
  );
  console.log({ selectedEpisode });
  return (
    <EpisodeContext.Provider value={value}>{children}</EpisodeContext.Provider>
  );
}

export function useEpisode() {
  const contextData = useContext(EpisodeContext);
  return contextData;
}
