import styles from "./BusinessNotes.module.css";
import { useNotes } from "../contexts/NotesContext";

import Note from "../components/Note";
import NoNotes from "./NoNotes";
import CheckedNotes from "../components/CheckedNotes";

function BusinessNotes() {
  const { notes, checkedNotes, showCheckedOnly } = useNotes();

  const switcher =
    notes.find((note) => note.section === "business") ||
    checkedNotes.find((note) => note.section === "business");

  if (showCheckedOnly)
    return checkedNotes.length ? (
      <div className={styles.mt3}>
        <div className={styles.flex}>
          {checkedNotes.map(
            (note) =>
              note.section === "business" && (
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
                note.section === "business" && (
                  <Note note={note} key={note.id} />
                )
            )}
          {checkedNotes?.map(
            (note) =>
              note.section === "business" && (
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

export default BusinessNotes;
