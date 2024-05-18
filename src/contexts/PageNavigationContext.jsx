import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

PagesNavigationProvider.propTypes = {
  children: PropTypes.any,
};

const PageNavigationContext = createContext();

const initialState = {
  currentPage: "all",
};

function reducer(state, action) {
  switch (action.type) {
    case "page/selected":
      return { ...state, currentPage: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

function PagesNavigationProvider({ children }) {
  const [{ currentPage }, dispatch] = useReducer(reducer, initialState);

  return (
    <PageNavigationContext.Provider value={{ currentPage, dispatch }}>
      {children}
    </PageNavigationContext.Provider>
  );
}

function usePageNavigation() {
  const context = useContext(PagesNavigationProvider);
  if (context === undefined)
    throw new Error("Context cannot be used outside PageNavigationProvider");
  return context;
}

export { PagesNavigationProvider, usePageNavigation };
