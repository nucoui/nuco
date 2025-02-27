import type { ComponentProps, ReactNode } from "react";
import { Header } from "@nuco/react";
import cssVariables from "@nuco/variable/css.css?url";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import cssMain from "~/styles/main.scss?url";
import cssReset from "~/styles/reset.css?url";
import { Anchor } from "../components/Anchor/Anchor";
import { ColorScheme } from "../components/layouts/ColorScheme";
import styles from "./__root.module.scss";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0 viewport-fit=cover",
      },
      {
        title: "@nuco/core",
      },
    ],
    links: [
      { rel: "stylesheet", href: cssReset },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      },
      { rel: "stylesheet", href: cssVariables },
      { rel: "stylesheet", href: cssMain },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

const MIDDLE_ANCHOR_LINKS = [
  {
    to: "/docs/",
    children: "Docs",
  },
] as const satisfies Array<ComponentProps<typeof Anchor>>;

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body id="root">
        <ColorScheme />
        <div id="header">
          <Header>
            <div slot="logo" className={styles["logo-container"]}>
              <Link to="/">
                <img src="/( •ω• ฅ).png" alt="logo" className={styles.logo} />
              </Link>
            </div>
            <div slot="middle" className={styles["middle-container"]}>
              {MIDDLE_ANCHOR_LINKS.map(link => (
                <Anchor key={link.to} {...link} />
              ))}
            </div>
          </Header>
        </div>

        {children}

        <footer>
          footer
        </footer>
        <Scripts />
      </body>
    </html>
  );
}
