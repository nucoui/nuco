import type { ReactElement } from "react";
import { H1, H2, H3, H4 } from "@nuco/react";
import { createFileRoute } from "@tanstack/react-router";
import { LinkButton } from "../components/LinkButton/LinkButton";
import styles from "./index.module.scss";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent(): ReactElement {
  const links = [
    {
      title: "with Web Components",
      href: "/docs/getting-started/web-components",
      isSupported: true,
    },
    {
      title: "with Vue.js",
      href: "/docs/getting-started/vue",
      isSupported: false,
    },
    {
      title: "with React",
      href: "/docs/getting-started/react",
      isSupported: true,
    },
    {
      title: "with Angular",
      href: "/docs/getting-started/angular",
      isSupported: false,
    },
    {
      title: "with Svelte",
      href: "/docs/getting-started/svelte",
      isSupported: false,
    },
  ] as const satisfies Array<{ title: string; href: `/${string}`; isSupported?: boolean }>;

  return (
    <div className={styles["contents-container"]}>
      <div className={styles["hero-container"]}>
        <div className={styles.title}>
          <div className={styles.gradient1}></div>
          <div className={styles.gradient2}></div>

          <div className={styles.text}>
            <H1>@nuco/core</H1>
            <H3>
              Design system library
              <br />
              that Transcends Framework boundaries
            </H3>
          </div>
        </div>
        <div className={styles.links}>
          <H4>Get Started</H4>
          {links.map(({ title, href, isSupported }) => (
            <LinkButton key={href} href={href} variant={isSupported ? "primary" : "secondary"} disabled={!isSupported} width="auto">
              {title}
            </LinkButton>
          ))}
        </div>
      </div>
      <div>
        <H2>Features</H2>
        index
      </div>
    </div>
  );
}
