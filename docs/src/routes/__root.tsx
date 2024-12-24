import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
          borderBottom: "1px solid var(--cs-border-primary)",
        }}
      >
        <Link to="/">
          Home
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});
