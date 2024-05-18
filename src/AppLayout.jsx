import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";

import SearchBar from "./pages/SearchBar";
import MainNav from "./pages/MainNav";

function AppLayout() {
  return (
    <main className={styles.grid}>
      <SearchBar />
      <MainNav />
      <Outlet />
    </main>
  );
}

export default AppLayout;
