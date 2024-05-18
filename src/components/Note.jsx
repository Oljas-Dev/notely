import PropTypes from "prop-types";
import styles from "./Note.module.css";
import { formatDate } from "../utils/helpers";
import { useNotes } from "../contexts/NotesContext";

import DeleteConfirmation from "../ui/DeleteConfirmation";
import NoteHeader from "../ui/NoteHeader";

Note.propTypes = {
  note: PropTypes.object,
};

function Note({ note }) {
  const { title, description, date } = note;
  const { deleteCheck } = useNotes();

  const formatedDate = formatDate(date);

  return (
    <div className={styles.note__container}>
      <div>
        <NoteHeader note={note} />

        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <span className={styles.note_date}>{formatedDate}</span>

      {deleteCheck && <DeleteConfirmation />}
    </div>
  );
}

export default Note;
