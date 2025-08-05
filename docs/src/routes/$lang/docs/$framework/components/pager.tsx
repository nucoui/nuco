import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/$lang/docs/$framework/components/pager",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/$lang/docs/$framework/components/pager"!</div>;
}
