import type { ReactElement } from "react";
import { Button, H1, H3 } from "@nuco/react";
import { createFileRoute } from "@tanstack/react-router";
import styles from "./index.module.scss";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent(): ReactElement {
  return (
    <div className={styles["contents-container"]}>
      <div className={styles["hero-container"]}>
        <div>
          <H1>@nuco/core</H1>
          <H3>Design system for All Frameworks</H3>
        </div>
        <div className={styles.links}>
          <Button type="anchor" href="/docs/getting-started/web-components" width="auto">
            Get Started with Web Components
          </Button>
          <Button type="anchor" href="/docs/getting-started/react" width="auto">
            Get Started with React
          </Button>
        </div>
      </div>
      index
    </div>
  );
}
