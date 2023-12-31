import styles from "./page.module.css";
import { PodcastGrid, SearchBar } from "./components";

export default async function PodcastPage() {
  return (
    <div className={styles.main}>
      <SearchBar />
      <PodcastGrid />
    </div>
  );
}
