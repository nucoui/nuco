import { Breadcrumb, Li } from "@nuco/react";
import { createFileRoute, ErrorComponent, Outlet, useLocation } from "@tanstack/react-router";
import { Anchor } from "../components/Anchor/Anchor";
import { NotFound } from "../components/layouts/NotFound/NotFound";
import { getBreadcrumb } from "../utils/getBreadcrumb";
import styles from "./docs.module.scss";

export const Route = createFileRoute("/docs")({
  errorComponent: ErrorComponent,
  notFoundComponent: NotFound,
  component: RouteComponent,
});

function RouteComponent() {
  const location = useLocation();
  const breadcrumb = getBreadcrumb(location.pathname);

  return (
    <div className={styles["contents-container"]}>
      <nav className={styles.nav}>
        nav
      </nav>
      <main className={styles.main}>
        <div className={styles.breadcrumb}>
          <Breadcrumb>
            {breadcrumb.map(({ shortTitle, to }, index) => {
              const isLast = index === breadcrumb.length - 1;

              return isLast
                ? (
                    <Li key={to}>{shortTitle}</Li>
                  )
                : (
                    <Li key={to}>
                      <Anchor to={to} color="secondary">{shortTitle}</Anchor>
                    </Li>
                  );
            })}
          </Breadcrumb>
        </div>

        <Outlet />

      </main>
    </div>
  );
}
