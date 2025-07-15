import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/docs/$framework")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
