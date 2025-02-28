import { H1, H2, H3, H4 } from "@nuco/react";
import { LinkButton } from "~/components/LinkButton/LinkButton";
import styles from "./_index.module.scss";

const Page = () => {
  const links = [
    {
      title: "with Web Components",
      href: "/docs/web-components/getting-started",
      isSupported: true,
    },
    {
      title: "with Vue.js",
      href: "/docs/vue/getting-started",
      isSupported: false,
    },
    {
      title: "with React",
      href: "/docs/react/getting-started",
      isSupported: true,
    },
    {
      title: "with Angular",
      href: "/docs/angular/getting-started",
      isSupported: false,
    },
    {
      title: "with Svelte",
      href: "/docs/svelte/getting-started",
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
};

export default Page;
