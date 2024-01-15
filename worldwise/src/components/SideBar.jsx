import AppNav from "./AppNav";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      <div className={styles.footer}>
        <footer className={styles.copyright}>
          &copy; Copyright by {new Date().getFullYear()} WorldWise Inc.
        </footer>
      </div>
    </div>
  );
}
