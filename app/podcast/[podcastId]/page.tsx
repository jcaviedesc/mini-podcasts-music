import dayjs from "dayjs";
import Duration from "dayjs/plugin/duration";
import podcastService from "../../../services/podcasts.service";

dayjs.extend(Duration);

type pageProps = {
  params: { podcastId: string };
};

export default async function PodcastDetailPage({
  params: { podcastId },
}: pageProps) {
  const { resultCount, results: episodes } = await podcastService.getPodcast({
    id: podcastId,
  });
  return (
    <div>
      <div>
        <p>Episodes {resultCount}</p>
      </div>
      <div>
        <div className="flex p-4">
          <h3 className="flex-grow font-bold text-gray-600">Title</h3>
          <p className="text-gray-600 font-bold">Date</p>
          <p className="text-gray-600 font-bold">Duracion</p>
        </div>
        {episodes.map((episode, index) => {
          const duration = dayjs.duration(episode.trackTimeMillis);
          const minutes = duration.minutes();
          const seconds = duration.seconds();
          return (
            <div
              key={episode.trackId}
              className={index % 2 ? "flex p-4" : "flex p-4 bg-slate-300"}
            >
              <h3 className="flex-grow text-gray-600">{episode.trackName}</h3>
              <p className="text-gray-600">
                {dayjs(episode.releaseDate).format("DD/MM/YYYY")}
              </p>
              <p className="text-gray-600">
                {minutes}:{seconds}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
