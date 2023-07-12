"use client";

import { useContext, useMemo, useState } from "react";
import { PodcastContext } from "./PodcastContext";
import { Podcast } from "../../../types/podcasts";

type PodcastProviderProps = {
  children: React.ReactNode;
  initialValue?: Podcast;
};

export function PodcastProvider({
  children,
  initialValue,
}: PodcastProviderProps) {
  const [selectedPodcast, setSelectedPodcast] = useState<Podcast | undefined>(
    initialValue
  );

  const value = useMemo(
    () => ({
      podcast: selectedPodcast,
      selectPodcast: setSelectedPodcast,
    }),
    [selectedPodcast]
  );

  return (
    <PodcastContext.Provider value={value}>{children}</PodcastContext.Provider>
  );
}

export function usePodcast() {
  const contextData = useContext(PodcastContext);
  return contextData;
}
