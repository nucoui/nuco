import { H2 } from "@nuco/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/web-components/getting-started")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <H2>Getting Started with Web Components</H2>
      <p>test</p>
    </>
  );
}
