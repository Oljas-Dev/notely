import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AllNotes from "./pages/AllNotes";
import PersonalNotes from "./pages/PersonalNotes";
import HomeNotes from "./pages/HomeNotes";
import BusinessNotes from "./pages/BusinessNotes";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./AppLayout";
import { NotesProvider } from "./contexts/NotesContext";
import { PagesNavigationProvider } from "./contexts/PageNavigationContext";

function App() {
  return (
    <NotesProvider>
      <PagesNavigationProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="homepage" />} />
              <Route path="homepage" element={<AllNotes />} />
              <Route path="personal" element={<PersonalNotes />} />
              <Route path="home" element={<HomeNotes />} />
              <Route path="business" element={<BusinessNotes />} />
            </Route>
            <Route element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </PagesNavigationProvider>
    </NotesProvider>
  );
}

export default App;
