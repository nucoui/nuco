import type { Route } from "./+types/root";

import { Header } from "@nuco/react";
import { type ComponentProps, useEffect } from "react";
import {
  isRouteErrorResponse,
  Link,

  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { scan } from "react-scan";

import { Anchor } from "~/components/Anchor/Anchor";
import { ColorScheme } from "~/components/layouts/ColorScheme";
import cssReset from "~/reset.css?url";

import styles from "./root.module.scss";
import "./app.scss";
import "@nuco/variable/css";

const MIDDLE_ANCHOR_LINKS = [
  {
    to: "/docs/",
    children: "Docs",
  },
] as const satisfies Array<ComponentProps<typeof Anchor>>;

export const links: Route.LinksFunction = () => [
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
];

export function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Make sure to run react-scan only after hydration
    scan({
      enabled: true,
    });
  }, []);

  return (

    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0 viewport-fit=cover" />
        <Meta />
        <Links />
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
                <Anchor
                  key={link.to}
                  underline="none"
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
  return <Outlet />;
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
