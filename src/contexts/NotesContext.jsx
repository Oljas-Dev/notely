import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import PropTypes from "prop-types";

NotesProvider.propTypes = {
  children: PropTypes.any,
};

const NoteContext = createContext();

const initialState = {
  notes: JSON.parse(localStorage.getItem("notes")) || [],
  checkedNotes: JSON.parse(localStorage.getItem("checkedNotes")) || [],
  currentNote: {},
  currentPage: "all",
  deleteConfirmation: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "note/loading":
      return { ...state, notes: action.payload };

    case "note/selected":
      return { ...state, currentNote: action.payload };

    case "note/added":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };

    case "confirmation":
      return { ...state, deleteConfirmation: action.payload };

    case "note/deleted":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    case "note/completed":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload
            ? { ...note, checked: !note.checked }
            : note
        ),
      };

    case "page/selected":
      return { ...state, currentPage: action.payload };

    case "rejected":
      return { ...state, error: action.payload };

    case "checkedNote/added":
      return {
        ...state,
        checkedNotes: [...state.checkedNotes, action.payload],
      };

    case "checkedNote/deleted":
      return {
        ...state,
        checkedNotes: state.checkedNotes.filter(
          (note) => note.id !== action.payload
        ),
      };

    default:
      throw new Error("Unknown action type");
  }
}

function NotesProvider({ children }) {
  const [
    {
      notes,
      checkedNotes,
      currentNote,
      currentPage,
      deleteConfirmation,
      error,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const [deleteCheck, setDeleteCheck] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("personal");
  const [description, setDescription] = useState("");
  const [openForm, setOpenForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [showCheckedOnly, setShowCheckedOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  useEffect(
    function () {
      localStorage.setItem("notes", JSON.stringify(notes));
    },
    [notes]
  );

  useEffect(
    function () {
      localStorage.setItem("checkedNotes", JSON.stringify(checkedNotes));
    },
    [checkedNotes]
  );

  // const storedValue = notes.length
  //   ? notes
  //   : JSON.parse(localStorage.getItem("notes"));

  const searchedNotes =
    searchQuery.length > 0
      ? notes.filter((note) =>
          `${note.title} ${note.description} ${note.date}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : notes;

  const searchedCheckedNotes =
    searchQuery.length > 0
      ? checkedNotes.filter((note) =>
          `${note.title} ${note.description} ${note.date}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : checkedNotes;

  function handleShowCheckedOnly() {
    setShowCheckedOnly((show) => !show);
  }

  function handleCancel(type) {
    dispatch({ type: "rejected", payload: "" });

    setCategory("Personal");
    setTitle("");
    setDescription("");
    if (type === "add") setOpenForm((open) => !open);
    else if (type === "edit") setEditForm((open) => !open);
  }

  const countDescription = description.split("").length;

  return (
    <NoteContext.Provider
      value={{
        notes: searchedNotes,
        searchQuery,
        checkedNotes: searchedCheckedNotes,
        showCheckedOnly,
        handleShowCheckedOnly,
        handleCancel,
        currentNote,
        currentPage,
        deleteConfirmation,
        deleteCheck,
        setDeleteCheck,
        openForm,
        setOpenForm,
        editForm,
        setEditForm,
        title,
        setTitle,
        category,
        setCategory,
        description,
        setDescription,
        setSearchQuery,
        showOptions,
        setShowOptions,
        countDescription,
        error,
        dispatch,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
}

function useNotes() {
  const context = useContext(NoteContext);
  if (context === undefined)
    throw new Error("Context cannot be used outside NotesProvider");
  return context;
}

export { NotesProvider, useNotes };
