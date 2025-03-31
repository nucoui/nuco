import type { ComponentProps } from "react";
import { H1 } from "@nuco/react/components/H1";
import { H2 } from "@nuco/react/components/H2";
import { H3 } from "@nuco/react/components/H3";
import { H4 } from "@nuco/react/components/H4";
import { LinkButton } from "~/components/LinkButton/LinkButton";
import type { Nav } from "~/components/Nav/Nav";
import styles from "./_index.module.scss";

const Page = () => {
  const links = [
    {
      title: "with Web Components",
      href: "/docs/web-components/overview",
      isSupported: true,
    },
    {
      title: "with Vue.js",
      href: "/docs/vue/overview",
      isSupported: false,
    },
    {
      title: "with React",
      href: "/docs/react/overview",
      isSupported: true,
    },
    {
      title: "with Angular",
      href: "/docs/angular/overview",
      isSupported: false,
    },
    {
      title: "with Svelte",
      href: "/docs/svelte/overview",
      isSupported: false,
    },
  ] as const satisfies Array<{ title: string; href: ComponentProps<typeof Nav>["links"][number]["href"]; isSupported?: boolean }>;

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
};

export default Page;
