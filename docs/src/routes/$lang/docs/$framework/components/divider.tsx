import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/$lang/docs/$framework/components/divider",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/$lang/docs/$framework/components/divider"!</div>;
}
