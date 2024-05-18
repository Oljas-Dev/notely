import { useNotes } from "../contexts/NotesContext";
import styles from "./NotesList.module.css";

import Note from "./Note";
import NoNotes from "../pages/NoNotes";
import CheckedNotes from "./CheckedNotes";

function NotesList() {
  const { notes, checkedNotes, showCheckedOnly } = useNotes();

  if (showCheckedOnly)
    return checkedNotes.length ? (
      <div className={styles.flex}>
        {checkedNotes.map((note) => (
          <CheckedNotes note={note} key={note.id} />
        ))}
      </div>
    ) : (
      <div className={styles.container}>
        <NoNotes type="noCheckedNotes" />
      </div>
    );

  return (
    <div className={styles.flex}>
      {notes
        ?.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        .map((note) => (
          <Note note={note} key={note.id} />
        ))}
      {checkedNotes?.map((note) => (
        <CheckedNotes note={note} key={note.id} />
      ))}
    </div>
  );
}

export default NotesList;
