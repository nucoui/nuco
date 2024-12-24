import type { ReactElement } from "react";
import { Button, Input } from "@nuko/react";
import { createLazyFileRoute } from "@tanstack/react-router";
import styles from "./index.lazy.module.css";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent(): ReactElement {
  return (
    <>
      <p>Path : /</p>
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
    </>
  );
}
