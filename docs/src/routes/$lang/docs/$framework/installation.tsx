import { H1 } from "@nuco/react/components/H1";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/docs/$framework/installation")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <H1>Installation</H1>
      <p>
        This section provides detailed instructions on how to install the
        framework in your project.
      </p>
    </>
  );
}
