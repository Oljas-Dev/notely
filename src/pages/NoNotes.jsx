import styles from "./NoNotes.module.css";
import PropTypes from "prop-types";
import notesPicture from "../../public/notes.png";

NoNotes.propTypes = {
  type: PropTypes.string,
};

function NoNotes({ type }) {
  if (type === "noCheckedNotes")
    return (
      <div className={styles.flex}>
        <img src={notesPicture} width="206px" height="188px" alt="no notes" />
        <p className={styles.text}>You don’t have any completed notes</p>
      </div>
    );

  return (
    <div className={styles.flex}>
      <img src={notesPicture} width="206px" height="188px" alt="no notes" />
      <p className={styles.text}>You don’t have any notes</p>
    </div>
  );
}

export default NoNotes;
