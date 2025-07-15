import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: () => {
    throw redirect({
      to: "/$lang",
      params: { lang: "en" },
    });
  },
  component: Home,
});

function Home() {
  throw redirect({
    to: "/$lang",
    params: { lang: "en" },
  });
}
