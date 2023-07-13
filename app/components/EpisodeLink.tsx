"use client";

import Link, { LinkProps } from "next/link";
import { PodcastEpisodesResult } from "../../types/podcasts";
import { useEpisode } from "../_providers/episode";

type EpisodeLinkProps = {
  episode: PodcastEpisodesResult;
  children: React.ReactNode;
  className: string;
} & LinkProps;

export function EpisodeLink({
  children,
  episode,
  ...linkProps
}: EpisodeLinkProps) {
  const { selectEpisode } = useEpisode();
  return (
    <Link
      {...linkProps}
      onClick={() => {
        selectEpisode(episode);
      }}
    >
      {children}
    </Link>
  );
}
