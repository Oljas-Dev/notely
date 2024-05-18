import PropTypes from "prop-types";

import styles from "./Button.module.css";

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  submitType: PropTypes.string,
  children: PropTypes.any,
};

function Button({ children, type, onClick, submitType }) {
  return (
    <button className={styles[type]} onClick={onClick} type={submitType}>
      {children}
    </button>
  );
}

export default Button;
