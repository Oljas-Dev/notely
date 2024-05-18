import { useNotes } from "../contexts/NotesContext";
import styles from "./AllNotes.module.css";

import NotesList from "../components/NotesList";
import NoNotes from "./NoNotes";
import NoSearchResults from "./NoSearchResults";

function AllNotes() {
  const { notes, checkedNotes, searchQuery } = useNotes();

  const notesFound =
    notes.filter((note) =>
      `${note.title} ${note.description} ${note.date}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    ).length === 0;

  const switcher = notes?.length > 0 || checkedNotes.length > 0;

  if (searchQuery.length > 0 && notesFound)
    return (
      <div className={`${styles.container} ${styles.mt3}`}>
        <NoSearchResults />
      </div>
    );

  return (
    <div className={`${styles.container} ${switcher && styles.mt3}`}>
      {switcher ? <NotesList /> : <NoNotes />}
    </div>
  );
}

export default AllNotes;
