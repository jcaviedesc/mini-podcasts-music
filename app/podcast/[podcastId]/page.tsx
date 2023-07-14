import dayjs from "dayjs";
import Duration from "dayjs/plugin/duration";
import podcastService from "../../../services/podcasts.service";
import { EpisodeLink } from "../../components/EpisodeLink";
import styles from "./page.module.css";

dayjs.extend(Duration);

type pageProps = {
  params: { podcastId: number };
};

export default async function PodcastDetailPage({
  params: { podcastId },
}: pageProps) {
  const { resultCount, results } = await podcastService.getPodcast({
    id: podcastId,
  });
  const [_, ...episodes] = results;
  return (
    <div>
      <div className="bg-white rounded-lg p-4 shadow mb-4">
        <h3 className="text-gray-900 font-bold">Episodes {resultCount}</h3>
      </div>
      <div className="bg-white rounded-lg p-4 shadow">
        <div className="flex p-4">
          <h3 className="flex-grow font-bold text-gray-600">Title</h3>
          <p className={"text-gray-600 font-bold ".concat(styles.w12)}>Date</p>
          <p className={"text-gray-600 font-bold ".concat(styles.w12)}>
            Duracion
          </p>
        </div>
        {episodes.map((episode, index) => {
          const duration = dayjs.duration(episode.trackTimeMillis);
          const minutes = duration.minutes();
          const seconds = duration.seconds();
          return (
            <div
              key={episode.trackId}
              className={`flex  p-4 ${index % 2 ? "bg-slate-300" : ""}`}
            >
              <EpisodeLink
                href={`/podcast/${podcastId}/episode/${episode.trackId}`}
                episode={episode}
                className="flex flex-grow"
              >
                <h3 className="text-blue-500 hover:underline">
                  {episode.trackName}
                </h3>
              </EpisodeLink>
              <p className={"text-gray-600 ".concat(styles.w12)}>
                {dayjs(episode.releaseDate).format("DD/MM/YYYY")}
              </p>
              <p className={"text-gray-600 ".concat(styles.w12)}>
                {minutes}:{seconds}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
