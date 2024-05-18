import styles from "./Checkbox.module.css";
import PropTypes from "prop-types";

Checkbox.propTypes = {
  id: PropTypes.any,
  onClick: PropTypes.func,
  type: PropTypes.string,
  children: PropTypes.string,
};

function Checkbox({ id, onClick, type, children }) {
  if (type === "noteCheckbox")
    return (
      <>
        <input
          type="checkbox"
          className={styles.checkbox}
          id={id}
          onClick={onClick}
        />
        <label htmlFor={id} className={styles.label}>
          <span className={styles.checkbox_button}></span>
          <span className={styles.checkbox_text}>{children}</span>
        </label>
      </>
    );

  if (type === "normal")
    return (
      <div className={styles.input}>
        <div>
          <input
            type="checkbox"
            className={styles.checkbox}
            id={id}
            onClick={onClick}
          />
          <label htmlFor={id} className={styles.label}>
            <span className={styles.checkbox_button}></span>
          </label>
        </div>
        <span>{children}</span>
      </div>
    );
}

export default Checkbox;
