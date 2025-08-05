import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/$lang/docs/$framework/components/pagers",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/$lang/docs/$framework/components/pagers"!</div>;
}
