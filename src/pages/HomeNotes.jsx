import { useNotes } from "../contexts/NotesContext";
import styles from "./HomeNotes.module.css";

import Note from "../components/Note";
import NoNotes from "./NoNotes";
import CheckedNotes from "../components/CheckedNotes";

function HomeNotes() {
  const { notes, checkedNotes, showCheckedOnly } = useNotes();

  const switcher =
    notes.find((note) => note.section === "home") ||
    checkedNotes.find((note) => note.section === "home");

  if (showCheckedOnly)
    return checkedNotes.length ? (
      <div className={styles.mt3}>
        <div className={styles.flex}>
          {checkedNotes.map(
            (note) =>
              note.section === "home" && (
                <CheckedNotes note={note} key={note.id} />
              )
          )}
        </div>
      </div>
    ) : (
      <div className={styles.container}>
        <NoNotes type="noCheckedNotes" />
      </div>
    );

  return (
    <div className={styles.mt3}>
      {switcher ? (
        <div className={styles.flex}>
          {notes
            .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
            .map(
              (note) =>
                note.section === "home" && <Note note={note} key={note.id} />
            )}
          {checkedNotes?.map(
            (note) =>
              note.section === "home" && (
                <CheckedNotes note={note} key={note.id} />
              )
          )}
        </div>
      ) : (
        <div className={styles.container}>
          <NoNotes />
        </div>
      )}
    </div>
  );
}

export default HomeNotes;
