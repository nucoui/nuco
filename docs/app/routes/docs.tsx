import type { Option } from "@nuco/react/components/Option";
import { Breadcrumb } from "@nuco/react/components/Breadcrumb";
import { Li } from "@nuco/react/components/Li";
import { Pager } from "@nuco/react/components/Pager";
import { Pagers } from "@nuco/react/components/Pagers";
import FamiconsLogoWebComponent from "~icons/famicons/logo-web-component?width=1.5rem&height=1.5rem";
import MdiAngular from "~icons/mdi/angular?width=1.5rem&height=1.5rem";
import MdiReact from "~icons/mdi/react?width=1.5rem&height=1.5rem";
import MdiVuejs from "~icons/mdi/vuejs?width=1.5rem&height=1.5rem";
import RiSvelteFill from "~icons/ri/svelte-fill?width=1.5rem&height=1.5rem";
import { type ComponentProps, useMemo, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { Anchor } from "~/components/Anchor/Anchor";
import { Nav } from "~/components/Nav/Nav";
import { getBreadcrumb } from "~/utils/getBreadcrumb";
import { getPageInfo } from "~/utils/getPageInfo";
import styles from "./docs.module.scss";

const Layout = () => {
  const location = useLocation();

  const pageInfo = getPageInfo(location.pathname);
  const breadcrumb = getBreadcrumb(location.pathname);
  const [selectedCategory, setSelectedCategory] = useState<"web-components" | "vue" | "react" | "angular" | "svelte" | undefined>(undefined);

  const category = selectedCategory || location.pathname.split("/")[2] as "web-components" | "vue" | "react" | "angular" | "svelte";

  const displayCategory = useMemo(() => {
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

  const links: ComponentProps<typeof Nav>["links"] = useMemo(() => [
    {
      title: `Getting Started \nwith ${displayCategory}`,
      children: [
        { title: "Overview", href: `/docs/${category}/overview` },
        { title: "Installation", href: `/docs/${category}/installation` },
      ],
    },
    {
      title: "Components",
      children: [
        { title: "Anchor", href: `/docs/${category}/components/anchor` },
        { title: "Button", href: `/docs/${category}/components/button` },
      ],
    },
  ], [category, displayCategory]);

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
            {breadcrumb.map(({ shortTitle, to }, index) => {
              const isLast = index === breadcrumb.length - 1;

              return isLast
                ? (
                    <Li key={to}>{shortTitle}</Li>
                  )
                : (
                    <Li key={to}>
                      <Anchor to={to} underline="none">{shortTitle}</Anchor>
                    </Li>
                  );
            })}
          </Breadcrumb>
        </div>

        <Outlet />

        <Pagers>
          {pageInfo.links.prev && (
            <Pager
              type="prev"
              slot="prev"
              href={pageInfo.links.prev}
            >
              {getPageInfo(pageInfo.links.prev)?.shortTitle}
            </Pager>
          )}
          {pageInfo.links.next && (
            <Pager
              type="next"
              slot="next"
              href={pageInfo.links.next}
            >
              {getPageInfo(pageInfo.links.next)?.shortTitle}
            </Pager>
          )}
        </Pagers>
      </main>
    </div>
  );
};

export default Layout;
