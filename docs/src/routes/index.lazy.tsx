import type { ReactElement } from "react";
import { Button, H1, H2, Input } from "@nuco/react";
import { createLazyFileRoute } from "@tanstack/react-router";
import styles from "./index.lazy.module.css";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent(): ReactElement {
  return (
    <>
      <H1>Path : /</H1>
      <H2>Heading 2</H2>
      <form
        action={(formData) => {
          // eslint-disable-next-line no-console
          console.log(formData.get("test"));
        }}
        className={styles.form}
      >
        <Input name="test" type="text" placeholder="test" />
        <Button type="submit">Submit</Button>
      </form>
      <div style={{
        height: "200dvh",
        backgroundColor: "var(--cs-background-secondary)",
      }}
      >
      </div>
    </>
  );
}
