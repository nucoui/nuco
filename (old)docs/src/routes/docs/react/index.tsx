import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/react/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/docs/react/"!</div>;
}
