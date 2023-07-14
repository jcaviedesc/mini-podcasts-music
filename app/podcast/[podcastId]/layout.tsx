import podcastService from "../../../services/podcasts.service";
import { episodeToPodcastDetail } from "../../../utils/PodcastTranform.utils";
import { EpisodeProvider } from "../../_providers/episode";
import { SideBarPodcast } from "../../components/SideBarPodcast";
import styles from "./page.module.css";

type PodcastLayoutProps = {
  children: React.ReactNode;
  params: { podcastId: number };
};
export default async function PodcastLayout({
  children,
  params: { podcastId },
}: PodcastLayoutProps) {
  const { results } = await podcastService.getPodcast({
    id: podcastId,
  });

  const [podcast] = results;
  const parsedPodcast = episodeToPodcastDetail(podcast);
  return (
    <div className={styles.podcastLayout}>
      <div className={styles.detailPodcast}>
        <SideBarPodcast {...parsedPodcast} />
      </div>
      <EpisodeProvider>
        <div className={styles.childrenContent}>{children}</div>
      </EpisodeProvider>
    </div>
  );
}
