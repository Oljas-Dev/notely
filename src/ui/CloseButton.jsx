import styles from "./CloseButton.module.css";
import PropTypes from "prop-types";

CloseButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};

function CloseButton({ type, onClick }) {
  return (
    <>
      <img
        src="../../public/close.png"
        alt="close"
        className={styles.image}
        onClick={onClick}
      />
      <span className={styles[type]}>&nbsp;</span>
    </>
  );
}

export default CloseButton;
