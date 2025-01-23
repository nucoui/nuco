import { Button, H1, H2, H3, H4, H5, H6, Input } from "@nuco/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <H1>Path : /</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6>Heading 6</H6>
      <p>p</p>
      <form
        action={(formData) => {
          // eslint-disable-next-line no-console
          console.log(formData.get("test"));
        }}
      >
        <Input name="test" type="text" placeholder="test" />
        <Button type="submit">Submit</Button>
      </form>
      <div
        style={{
          height: "200dvh",
          backgroundColor: "var(--cs-background-secondary)",
        }}
      >
      </div>
    </>
  );
}
