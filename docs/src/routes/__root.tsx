import type { ComponentProps } from "react";
import { Header } from "@nuco/react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Anchor } from "../components/Anchor/Anchor";
import styles from "./__root.module.scss";

export const Route = createRootRoute({
  errorComponent: () => <div>error</div>,
  notFoundComponent: () => <div>not found</div>,
  component: () => {
    const middleAnchorLinks = [
      {
        to: "/docs/getting-started",
        children: "Docs",
      },
    ] as const satisfies Array<ComponentProps<typeof Anchor>>;

    return (
      <>
        <div id="header">
          <Header>
            <div slot="logo" className={styles["logo-container"]}>
              <Link to="/">
                <img src="/( •ω• ฅ).png" alt="logo" className={styles.logo} />
              </Link>
            </div>
            <div slot="middle" className={styles["middle-container"]}>
              {middleAnchorLinks.map(link => (
                <Anchor key={link.to} {...link} />
              ))}
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
    );
  },
});
