import { Header } from "@nuco/react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import styles from "./__root.module.scss";

export const Route = createRootRoute({
  component: () => (
    <>
      <div id="header">
        <Header>
          <div slot="logo" className={styles["logo-container"]}>
            <img src="/public/( •ω• ฅ).png" alt="logo" className={styles.logo} />
          </div>
          <div slot="middle">
            <Link to="/">
              Home
            </Link>
          </div>
        </Header>
      </div>

      <div id="contents">
        <nav id="nav">
          nav
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
      <footer>
        footer
      </footer>
    </>
  ),
});
