import { useNotes } from "../contexts/NotesContext";
import styles from "./SearchBar.module.css";

import AddForm from "../components/AddForm";
import Button from "../ui/Button";

function SearchBar() {
  const { openForm, setOpenForm, setSearchQuery, searchQuery } = useNotes();

  return (
    <>
      <div className={styles.search}>
        <div className={styles.searchWrapper}>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="search"
            className={styles.searchIcon}
            placeholder="Search here..."
          />

          <Button type={"btn"} onClick={() => setOpenForm((open) => !open)}>
            <img src="./add-white.png" alt="+" />
            <span>Add</span>
          </Button>
        </div>
      </div>
      {openForm && <AddForm />}
    </>
  );
}

export default SearchBar;
