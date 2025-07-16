import type { Option } from "@nuco/react/components/Option";
import type { ComponentProps } from "react";
import { CustomAnchor } from "@/components/common/CustomAnchor/CustomAnchor";
import { Nav } from "@/components/layouts/Nav/Nav";
import { Breadcrumb } from "@nuco/react/components/Breadcrumb";
import { Li } from "@nuco/react/components/Li";
import { Pager } from "@nuco/react/components/Pager";
import { Pagers } from "@nuco/react/components/Pagers";
import { createFileRoute, interpolatePath, Outlet, useLoaderData } from "@tanstack/react-router";
import FamiconsLogoWebComponent from "~icons/famicons/logo-web-component?width=1.5rem&height=1.5rem";
import MdiAngular from "~icons/mdi/angular?width=1.5rem&height=1.5rem";
import MdiReact from "~icons/mdi/react?width=1.5rem&height=1.5rem";
import MdiVuejs from "~icons/mdi/vuejs?width=1.5rem&height=1.5rem";
import RiSvelteFill from "~icons/ri/svelte-fill?width=1.5rem&height=1.5rem";
import { useMemo, useState } from "react";
import styles from "./route.module.scss";

export const Route = createFileRoute("/$lang/docs")({
  component: RouteComponent,
});

function RouteComponent() {
  const { pageInfo, lang } = useLoaderData({ from: "/$lang" });
  const [selectedCategory, setSelectedCategory] = useState<"web-components" | "vue" | "react" | "angular" | "svelte" | undefined>(undefined);

  const prevPageHref = useMemo(() => {
    if (!pageInfo.info.pagers.prev)
      return undefined;

    const prevInfo = pageInfo.info.pagers.prev;

    return {
      href: interpolatePath({
        path: prevInfo.path.to,
        params: typeof prevInfo.path.params === "object" && prevInfo.path.params !== null
          ? prevInfo.path.params
          : {},
      }).interpolatedPath,
      shortTitle: prevInfo.shortTitle,
    };
  }, [pageInfo.info.pagers.prev]);
  const nextPageHref = useMemo(() => {
    if (!pageInfo.info.pagers.next)
      return undefined;

    const nextInfo = pageInfo.info.pagers.next;

    return {
      href: interpolatePath({
        path: nextInfo.path.to,
        params: typeof nextInfo.path.params === "object" && nextInfo.path.params !== null
          ? nextInfo.path.params
          : {},
      }).interpolatedPath,
      shortTitle: nextInfo.shortTitle,
    };
  }, [pageInfo.info.pagers.next]);

  // Check if params is an object and has the 'framework' property
  const category
    = selectedCategory
    ?? (typeof pageInfo.path.params === "object"
      && pageInfo.path.params !== null
      && "framework" in pageInfo.path.params
      ? (pageInfo.path.params as { framework?: string }).framework
      : undefined)
      ?? "web-components";

  const _displayCategory = useMemo(() => {
    switch (category) {
      case "web-components":
        return "Web Components";
      case "vue":
        return "Vue";
      case "react":
        return "React";
      case "angular":
        return "Angular";
      case "svelte":
        return "Svelte";
      default:
        return "";
    }
  }, [category]);

  const selectOptions: ComponentProps<typeof Option>[] = useMemo(() => [
    {
      children: <>
        <FamiconsLogoWebComponent />
        Web Components
      </>,
      value: "web-components",
      selected: category === "web-components",
    },
    {
      children: <>
        <MdiVuejs />
        Vue
      </>,
      value: "vue",
      disabled: true,
      selected: category === "vue",
    },
    {
      children: <>
        <MdiReact />
        React
      </>,
      value: "react",
      selected: category === "react",
    },
    {
      children: <>
        <MdiAngular />
        Angular
      </>,
      value: "angular",
      disabled: true,
      selected: category === "angular",
    },
    {
      children: <>
        <RiSvelteFill />
        Svelte
      </>,
      value: "svelte",
      disabled: true,
      selected: category === "svelte",
    },
  ], [category]);

  const links: ComponentProps<typeof Nav>["links"] = [
    {
      title: `Getting Started`,
      children: [
        { title: "Overview", props: { to: `/$lang/docs/$framework/overview`, params: { lang, framework: category } } },
        { title: "Installation", props: { to: `/$lang/docs/$framework/installation`, params: { lang, framework: category } } },
      ],
    },
    {
      title: "Components",
      children: [
        { title: "Anchor", props: { to: `/$lang/docs/$framework/components/anchor`, params: { lang, framework: category } } },
        { title: "Button", props: { to: `/$lang/docs/$framework/components/button`, params: { lang, framework: category } } },
        { title: "Badge", props: { to: `/$lang/docs/$framework/components/badge`, params: { lang, framework: category } } },
        { title: "Breadcrumb", props: { to: `/$lang/docs/$framework/components/breadcrumb`, params: { lang, framework: category } } },
        { title: "CodeBlock", props: { to: `/$lang/docs/$framework/components/codeblock`, params: { lang, framework: category } } },
        { title: "Divider", props: { to: `/$lang/docs/$framework/components/divider`, params: { lang, framework: category } } },
        { title: "Error", props: { to: `/$lang/docs/$framework/components/error`, params: { lang, framework: category } } },
        { title: "H1", props: { to: `/$lang/docs/$framework/components/h1`, params: { lang, framework: category } } },
        { title: "H2", props: { to: `/$lang/docs/$framework/components/h2`, params: { lang, framework: category } } },
        { title: "H3", props: { to: `/$lang/docs/$framework/components/h3`, params: { lang, framework: category } } },
        { title: "H4", props: { to: `/$lang/docs/$framework/components/h4`, params: { lang, framework: category } } },
        { title: "H5", props: { to: `/$lang/docs/$framework/components/h5`, params: { lang, framework: category } } },
        { title: "H6", props: { to: `/$lang/docs/$framework/components/h6`, params: { lang, framework: category } } },
        { title: "Header", props: { to: `/$lang/docs/$framework/components/header`, params: { lang, framework: category } } },
        { title: "Input", props: { to: `/$lang/docs/$framework/components/input`, params: { lang, framework: category } } },
        { title: "Li", props: { to: `/$lang/docs/$framework/components/li`, params: { lang, framework: category } } },
        { title: "NavAccordion", props: { to: `/$lang/docs/$framework/components/navaccordion`, params: { lang, framework: category } } },
        { title: "Option", props: { to: `/$lang/docs/$framework/components/option`, params: { lang, framework: category } } },
        { title: "Pager", props: { to: `/$lang/docs/$framework/components/pager`, params: { lang, framework: category } } },
        { title: "Pagers", props: { to: `/$lang/docs/$framework/components/pagers`, params: { lang, framework: category } } },
        { title: "Select", props: { to: `/$lang/docs/$framework/components/select`, params: { lang, framework: category } } },
        { title: "Ul", props: { to: `/$lang/docs/$framework/components/ul`, params: { lang, framework: category } } },
      ],
    },
  ];

  const handleChange = (value: string) => {
    setSelectedCategory(value as "web-components" | "vue" | "react" | "angular" | "svelte");
  };

  return (
    <div className={styles["contents-container"]}>
      <div className={styles["nav-container"]}>
        <Nav
          links={links}
          selectOptions={selectOptions}
          onChange={handleChange}
        />
      </div>

      <main className={styles.main}>
        <div className={styles.breadcrumb}>
          <Breadcrumb>
            {pageInfo.info.breadcrumbs.map(({ shortTitle, path }, index) => {
              const isLast = index === pageInfo.info.breadcrumbs.length - 1;

              return isLast
                ? (
                    <Li key={path.to}>{shortTitle}</Li>
                  )
                : (
                    <Li key={path.to}>
                      <CustomAnchor {...path as any} underline="dashed">{shortTitle}</CustomAnchor>
                    </Li>
                  );
            })}
          </Breadcrumb>
        </div>

        <Outlet />

        <Pagers style={{ marginTop: "var(--n-8)" }}>
          {prevPageHref && (
            <Pager
              type="prev"
              slot="prev"
              href={prevPageHref.href}
            >
              {prevPageHref.shortTitle}
            </Pager>
          )}
          {nextPageHref && (
            <Pager
              type="next"
              slot="next"
              href={nextPageHref.href}
            >
              {nextPageHref.shortTitle}
            </Pager>
          )}
        </Pagers>
      </main>
    </div>
  );
}
