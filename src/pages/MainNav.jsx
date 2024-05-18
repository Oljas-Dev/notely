import { useNavigate } from "react-router-dom";
import styles from "./MainNav.module.css";
import { useNotes } from "../contexts/NotesContext";
import Checkbox from "../ui/Checkbox";

function MainNav() {
  const { dispatch, currentPage, handleShowCheckedOnly } = useNotes();

  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <h1 className={styles.header}>Your notes</h1>
      <div className={styles.flex}>
        <ul className={styles.list}>
          <li
            className={`${currentPage === "all" && styles.current}`}
            onClick={() => {
              navigate("homepage");
              dispatch({ type: "page/selected", payload: "all" });
            }}
          >
            All
          </li>
          <li
            className={`${currentPage === "personal" && styles.current}`}
            onClick={() => {
              navigate("personal");
              dispatch({ type: "page/selected", payload: "personal" });
            }}
          >
            Personal
          </li>
          <li
            className={`${currentPage === "home" && styles.current}`}
            onClick={() => {
              navigate("home");
              dispatch({ type: "page/selected", payload: "home" });
            }}
          >
            Home
          </li>
          <li
            className={`${currentPage === "business" && styles.current}`}
            onClick={() => {
              navigate("business");
              dispatch({ type: "page/selected", payload: "business" });
            }}
          >
            Business
          </li>
        </ul>

        <Checkbox type="normal" id="completed" onClick={handleShowCheckedOnly}>
          Show only completed notes
        </Checkbox>
      </div>
    </nav>
  );
}

export default MainNav;
