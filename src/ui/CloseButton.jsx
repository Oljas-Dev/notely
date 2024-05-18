import styles from "./CloseButton.module.css";
import PropTypes from "prop-types";
import closePic from "../../public/close.png";

CloseButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};

function CloseButton({ type, onClick }) {
  return (
    <>
      <img
        src={closePic}
        alt="close"
        className={styles.image}
        onClick={onClick}
      />
      <span className={styles[type]}>&nbsp;</span>
    </>
  );
}

export default CloseButton;
