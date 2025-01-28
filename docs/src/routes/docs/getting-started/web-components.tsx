import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/getting-started/web-components")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/docs/getting-started/web-component"!</div>;
}
