import styles from "./NoSearchResults.module.css";

function NoSearchResults() {
  return (
    <div className={styles.flex}>
      <img
        src="../../public/search-results.svg"
        width="206px"
        height="188px"
        alt="no notes"
      />
      <p className={styles.text}>No notes found</p>
    </div>
  );
}
export default NoSearchResults;
