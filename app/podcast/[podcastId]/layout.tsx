import { SideBarPodcast } from "../../components/SideBarPodcast";
import styles from "./page.module.css";

type PodcastLayoutProps = {
  children: React.ReactNode;
};
export default async function PodcastLayout({ children }: PodcastLayoutProps) {
  return (
    <div className={styles.podcastLayout}>
      <div>
        <SideBarPodcast title="" image={""} author={""} description={""} />
      </div>
      <div>{children}</div>
    </div>
  );
}
