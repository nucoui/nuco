import { createFileRoute, Outlet } from "@tanstack/react-router";
import styles from "./route.module.scss";

export const Route = createFileRoute("/$lang/docs/$framework")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className={styles["docs-section"]}>
      <Outlet />
    </section>
  );
}
