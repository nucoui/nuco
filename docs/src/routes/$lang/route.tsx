import type { ResponsePageDataValue } from "@/routes/api/page-info";
import { LANG } from "@/constants/LANG";
import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { ofetch } from "ofetch";

export const Route = createFileRoute("/$lang")({
  loader: async ({ params, location }) => {
    const { lang } = params;

    if (!Object.keys(LANG).includes(lang ?? "")) {
      throw redirect({
        to: "/$lang",
        params: { lang: "en" },
      });
    }

    const pageInfo = await ofetch<ResponsePageDataValue>(`/api/page-info?path=${location.pathname}`);

    return {
      lang,
      pageInfo,
    };
  },
  head: ({ loaderData }) => {
    return loaderData?.pageInfo?.head ?? {};
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { lang } = Route.useLoaderData();

  return (
    <div lang={lang}>
      <Outlet />
    </div>
  );
}
