import styles from "./NoteHeader.module.css";
import PropTypes from "prop-types";
import { useNotes } from "../contexts/NotesContext";

import Checkbox from "./Checkbox";
import EditForm from "../components/EditForm";
import editPic from "../../public/edit.png";
import deletePic from "../../public/delete-rounded.png";

NoteHeader.propTypes = {
  note: PropTypes.object,
};

function NoteHeader({ note }) {
  const { section, id } = note;
  const { dispatch, setDeleteCheck, setEditForm, editForm, setCategory } =
    useNotes();

  function handleMarkChecked(note) {
    dispatch({ type: "checkedNote/added", payload: note });
    dispatch({ type: "note/deleted", payload: id });
  }

  function handleDeleteCurrentNote(note) {
    setDeleteCheck(true);

    dispatch({ type: "note/selected", payload: note });
  }

  function handleEditCurrentNote(note) {
    setEditForm((open) => !open);

    setCategory("");

    dispatch({ type: "note/selected", payload: note });
  }

  return (
    <>
      <div className={styles.note__flex_head}>
        <span
          className={`${styles.tag} 
        ${section === "business" && styles.purple} 
        ${section === "personal" && styles.orange} 
        ${section === "home" && styles.green}`}
        >
          {section}
        </span>
        <div className={styles.note__flex_left_element}>
          <Checkbox
            type="noteCheckbox"
            id={id}
            onClick={() => handleMarkChecked(note)}
            btnType="checkbox_button"
          >
            Mark as Complete
          </Checkbox>

          <img
            src={editPic}
            alt="edit"
            className={styles.edit_button}
            onClick={() => handleEditCurrentNote(note)}
          />
          <div className={styles.hover_edit_circle}>
            <span className={styles.edit_text}>Edit</span>
          </div>

          <img
            src={deletePic}
            alt="delete"
            className={styles.delete_button}
            onClick={() => handleDeleteCurrentNote(note)}
          />
          <div className={styles.hover_delete_circle}>
            <span className={styles.delete_text}>Delete</span>
          </div>
        </div>
      </div>

      {editForm && <EditForm />}
    </>
  );
}

export default NoteHeader;
