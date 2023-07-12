"use client";

import Link from "next/link";
import { usePodcast } from "../_providers/podcast";
import { Podcast } from "../../types/podcasts";

type PodcastLink = {
  href: string;
  children: React.ReactNode;
  podcast: Podcast;
};

export function PodcastLink({ href, children, podcast }: PodcastLink) {
  const { selectPodcast } = usePodcast();
  return (
    <Link
      href={href}
      onClick={() => {
        selectPodcast(podcast);
      }}
    >
      {children}
    </Link>
  );
}
