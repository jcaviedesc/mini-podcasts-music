import { EpisodeProvider } from "../../_providers/episode";
import { SideBarPodcast } from "../../components/SideBarPodcast";
import styles from "./page.module.css";

type PodcastLayoutProps = {
  children: React.ReactNode;
};
export default async function PodcastLayout({ children }: PodcastLayoutProps) {
  return (
    <div className={styles.podcastLayout}>
      <div className={styles.detailPodcast}>
        <SideBarPodcast />
      </div>
      <EpisodeProvider>
        <div className={styles.childrenContent}>{children}</div>
      </EpisodeProvider>
    </div>
  );
}
