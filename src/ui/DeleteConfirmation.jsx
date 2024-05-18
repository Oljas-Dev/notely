import styles from "./DeleteConfirmation.module.css";
import { useNotes } from "../contexts/NotesContext";

import Button from "./Button";
import CloseButton from "./CloseButton";

function DeleteConfirmation() {
  const { dispatch, setDeleteCheck, currentNote } = useNotes();

  function handleDeleteNote(note) {
    dispatch({ type: "note/deleted", payload: note.id });
    setDeleteCheck(false);
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.container}>
        <div className={styles.flex_row}>
          <h2>Delete note</h2>
          <CloseButton
            type="confirmWindow"
            onClick={() => setDeleteCheck(false)}
          />
        </div>

        <p>Are you sure you want to delete this note?</p>

        <div className={styles.btn_flex}>
          <Button type="cancel" onClick={() => setDeleteCheck(false)}>
            Cancel
          </Button>
          <Button type="delete" onClick={() => handleDeleteNote(currentNote)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
