import { createFileRoute, ErrorComponent, Outlet } from "@tanstack/react-router";
import { NotFound } from "../components/layouts/NotFound/NotFound";
import styles from "./docs.module.scss";

export const Route = createFileRoute("/docs")({
  errorComponent: ErrorComponent,
  notFoundComponent: NotFound,
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className={styles["contents-container"]}>
      <nav className={styles.nav}>
        nav
      </nav>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
