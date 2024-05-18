import { useNotes } from "../contexts/NotesContext";
import Button from "../ui/Button";
import CloseButton from "../ui/CloseButton";
import FormTitleAndCateg from "../ui/FormTitleAndCateg";
import styles from "./EditForm.module.css";

function EditForm() {
  const {
    dispatch,
    currentNote: note,
    title,
    category,
    description,
    setDescription,
    showOptions,
    setShowOptions,
    countDescription,
    handleCancel,
  } = useNotes();

  function handleEditSubmit(e) {
    e.preventDefault();

    const editedNote = {
      title: title ? title : note.title,
      section: category ? category.toLowerCase() : note.section,
      description: description ? description : note.description,
      date: new Date(),
      id: Math.random(),
      checked: false,
    };

    dispatch({ type: "note/added", payload: editedNote });

    dispatch({ type: "note/deleted", payload: note.id });

    handleCancel("edit");
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleEditSubmit}>
        <div className="flex_between">
          <h2>Edit note</h2>
          <CloseButton type="searchBar" onClick={() => handleCancel("edit")} />
        </div>

        <FormTitleAndCateg
          type={"edit"}
          note={note}
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
            defaultValue={note.description}
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
            onClick={() => handleCancel("edit")}
            submitType={"button"}
          >
            Cancel
          </Button>
          <Button type={"btn"} submitType={"submit"}>
            Edit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
