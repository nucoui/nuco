import type { Route } from "./+types/root";
import { ColorSchemeProvider, Header } from "@nuco/react";
import cssNuco from "@nuco/variable/css.css?url";
import FileIconsNpm from "~icons/file-icons/npm?width=1.06rem&height=1.26rem";
import MdiGithub from "~icons/mdi/github?width=1.5rem&height=1.5rem";
import React, { type AnchorHTMLAttributes, type ComponentProps, useEffect } from "react";
import {
  isRouteErrorResponse,
  Link,

  Links,
  Meta,
  type MetaFunction,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { scan } from "react-scan";
import { Anchor } from "~/components/Anchor/Anchor";
import cssReset from "~/reset.css?url";
import cssApp from "./app.scss?url";
import styles from "./root.module.scss";

const MIDDLE_ANCHOR_LINKS = [
  {
    to: "/docs/",
    children: "Docs",
  },
] as const satisfies Array<ComponentProps<typeof Anchor>>;

const RIGHT_ANCHOR_LINKS = [
  {
    href: "https://github.com/nucoui/nuco",
    target: "_blank",
    children: <MdiGithub />,
  },
  {
    href: "https://www.npmjs.com/@nuco/core",
    target: "_blank",
    children: <FileIconsNpm />,
  },
] as const satisfies Array<AnchorHTMLAttributes<HTMLAnchorElement>>;

export const links: Route.LinksFunction = () => [
  { rel: "stylesheet", href: cssReset },
  { rel: "stylesheet", href: cssApp },
  { rel: "stylesheet", href: cssNuco },
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
];

export const meta: MetaFunction = () => {
  return [
    { title: "@nuco/core" },
    { name: "description", content: "Design system library that Transcends Framework boundaries" },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Make sure to run react-scan only after hydration
    scan({
      enabled: true,
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0 viewport-fit=cover" />
        <link rel="icon" href="/icon-dark-transparent.svg" />
        <Meta />
        <Links />
      </head>

      <body id="root">
        <div id="header">
          <Header>
            <div slot="left" className={styles["left-container"]}>
              <Link to="/">
                <picture>
                  {/* {scheme === "dark" && (
                    <source
                      srcSet="/nuco-dark.png"
                      className={styles.logo}
                    />
                  )}
                  {scheme === "light" && (
                    <source
                      srcSet="/nuco-light.png"
                      className={styles.logo}
                    />
                  )} */}
                  <img
                    src="/nuco-light.png"
                    alt="Description of the image"
                    className={styles.logo}
                  />
                </picture>
              </Link>
            </div>
            <div slot="center" className={styles["center-container"]}>
              {MIDDLE_ANCHOR_LINKS.map(link => (
                <Anchor
                  key={link.to}
                  underline="none"
                  {...link}
                />
              ))}
            </div>
            <div slot="right" className={styles["right-container"]}>
              {RIGHT_ANCHOR_LINKS.map(link => (
                <a
                  key={link.href}
                  className={styles.anchor}
                  {...link}
                />
              ))}
            </div>
          </Header>
        </div>

        {children}

        <footer>
          footer
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ColorSchemeProvider>
      <Outlet />
    </ColorSchemeProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details
      = error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  }
  else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
