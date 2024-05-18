import { useNotes } from "../contexts/NotesContext";
import styles from "./FormTitleAndCateg.module.css";
import PropTypes from "prop-types";

FormTitleAndCateg.propTypes = {
  showOptions: PropTypes.bool,
  onShowOptions: PropTypes.any,
  note: PropTypes.object,
  type: PropTypes.string,
};

function FormTitleAndCateg({ showOptions, onShowOptions, note, type }) {
  const { title, setTitle, category, setCategory, error } = useNotes();

  if (type === "edit")
    return (
      <>
        <div>
          <div className="flex_between">
            <div>
              <label htmlFor="title">
                <p>Title</p>
              </label>
              <input
                defaultValue={note.title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Add title"
                id="title"
                className={styles.input}
              />
            </div>

            <div>
              <span>
                <p>Category</p>
              </span>
              <div
                className={styles.select_container}
                onClick={() => onShowOptions((show) => !show)}
              >
                <p>{category ? category : note.section}</p>
                <span
                  className={
                    showOptions ? styles.up_arrow : styles.drop_down_arrow
                  }
                >
                  &nbsp;
                </span>
                {showOptions && (
                  <ul className={styles.select_menu}>
                    <li onClick={() => setCategory("Personal")}>Personal</li>
                    <li onClick={() => setCategory("Home")}>Home</li>
                    <li onClick={() => setCategory("Business")}>Business</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <span className={styles.error}>{error}</span>
        </div>
      </>
    );

  if (type === "add")
    return (
      <>
        <div>
          <div className="flex_between">
            <div>
              <label htmlFor="title">
                <p>Title</p>
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Add title"
                id="title"
                className={styles.input}
              />
            </div>

            <div>
              <span>
                <p>Category</p>
              </span>
              <div
                className={styles.select_container}
                onClick={() => onShowOptions((show) => !show)}
              >
                <p>{category}</p>
                <span
                  className={
                    showOptions ? styles.up_arrow : styles.drop_down_arrow
                  }
                >
                  &nbsp;
                </span>
                {showOptions && (
                  <ul className={styles.select_menu}>
                    <li onClick={() => setCategory("Personal")}>Personal</li>
                    <li onClick={() => setCategory("Home")}>Home</li>
                    <li onClick={() => setCategory("Business")}>Business</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <span className={styles.error}>{error}</span>
        </div>
      </>
    );
}

export default FormTitleAndCateg;
