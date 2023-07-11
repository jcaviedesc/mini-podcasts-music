import styles from "../page.module.css";
import { PodcastGrid } from "../components";

export default async function PodcastPage() {
  return (
    <div className={styles.main}>
      <PodcastGrid />
    </div>
  );
}
