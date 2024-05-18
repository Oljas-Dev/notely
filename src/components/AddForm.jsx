import { useNotes } from "../contexts/NotesContext";
import styles from "./AddForm.module.css";

import CloseButton from "../ui/CloseButton";
import Button from "../ui/Button";
import FormTitleAndCateg from "../ui/FormTitleAndCateg";

function AddForm() {
  const {
    description,
    setDescription,
    title,
    category,
    setCategory,
    setTitle,
    showOptions,
    setShowOptions,
    handleCancel,
    countDescription,
    dispatch,
  } = useNotes();

  function handleSubmit(e) {
    e.preventDefault();

    if (!title)
      return dispatch({ type: "rejected", payload: "This field is required" });

    const newNote = {
      title,
      section: category.toLowerCase(),
      description,
      date: new Date(),
      id: Math.random(),
      checked: false,
    };

    dispatch({ type: "note/added", payload: newNote });
    dispatch({ type: "rejected", payload: "" });

    setCategory("Personal");
    setTitle("");
    setDescription("");
    handleCancel("add");
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="flex_between">
          <h2>Add note</h2>
          <CloseButton type={"searchBar"} onClick={() => handleCancel("add")} />
        </div>

        <FormTitleAndCateg
          type={"add"}
          showOptions={showOptions}
          onShowOptions={setShowOptions}
        />

        <div>
          <div className="flex_between">
            <label htmlFor="textarea">
              <p>
                Description <span className="sec_text">(optional)</span>
              </p>
            </label>
            <span>
              <p className="sec_text sm_text">{countDescription}/200</p>
            </span>
          </div>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.textarea}
            placeholder="Add description"
            id="textarea"
            name="description"
            maxLength={"200"}
          ></textarea>
        </div>

        <div className={styles.flex_right}>
          <Button
            type={"cancel"}
            onClick={() => handleCancel("add")}
            submitType={"button"}
          >
            Cancel
          </Button>
          <Button type={"btn"} submitType={"submit"}>
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
