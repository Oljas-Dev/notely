import PropTypes from "prop-types";
import styles from "./CheckedNotes.module.css";
import { formatDate } from "../utils/helpers";
import { useNotes } from "../contexts/NotesContext";

import editInactivePic from "../../public/edit_inactive.png";
import deleteInactivePic from "../../public/delete_inactive.png";

CheckedNotes.propTypes = {
  note: PropTypes.object,
};

function CheckedNotes({ note }) {
  const { section, title, description, date, id } = note;
  const { dispatch } = useNotes();
  const formatedDate = formatDate(date);

  function handleUncheck(note) {
    dispatch({ type: "note/added", payload: note });
    dispatch({ type: "checkedNote/deleted", payload: note.id });
  }

  return (
    <div className={styles.note__container}>
      <div>
        <div className={styles.note__flex_head}>
          <span className={styles.tag}>{section}</span>
          <div className={styles.note__flex_left_element}>
            <input
              type="checkbox"
              className={styles.note__checkbox}
              id={id}
              defaultChecked
              onClick={() => handleUncheck(note)}
            />
            <label htmlFor={id} className={styles.note__label}>
              <span className={styles.note__checkbox_button}></span>
              <span className={styles.note__checkbox_text}>Uncheck</span>
            </label>

            <img
              src={editInactivePic}
              alt="edit"
              className={styles.edit_button}
            />
            <div className={styles.hover_edit_circle}>
              <span className={styles.edit_text}>Edit</span>
            </div>

            <img
              src={deleteInactivePic}
              alt="delete"
              className={styles.delete_button}
            />
            <div className={styles.hover_delete_circle}>
              <span className={styles.delete_text}>Delete</span>
            </div>
          </div>
        </div>

        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <span className={styles.note_date}>{formatedDate}</span>
    </div>
  );
}

export default CheckedNotes;
