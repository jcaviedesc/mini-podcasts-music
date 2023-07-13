"use client";

import { useEpisode } from "../../../../_providers/episode";

type pageProps = {
  params: { podcastId: string; episodeId: string };
};

export default function EpisodeDetailPage({}: pageProps) {
  const { episode } = useEpisode();
  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <div>
        <h1 className="text-gray-900 font-bold text-lg">
          {episode?.trackName}
        </h1>
      </div>
      <p
        className="text-gray-900 mt-2 mb-6"
        dangerouslySetInnerHTML={{ __html: episode?.description ?? "" }}
      />
      <audio controls className="w-full">
        <source
          src={episode?.episodeUrl}
          type={`${episode?.episodeContentType}/${episode?.episodeFileExtension}`}
        />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
}
