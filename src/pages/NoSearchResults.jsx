import styles from "./NoSearchResults.module.css";
import SearchResultsPic from "../../public/search-results.png";

function NoSearchResults() {
  return (
    <div className={styles.flex}>
      <img src={SearchResultsPic} width="206px" height="188px" alt="no notes" />
      <p className={styles.text}>No notes found</p>
    </div>
  );
}
export default NoSearchResults;
