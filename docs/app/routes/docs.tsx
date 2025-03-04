import type { ComponentProps } from "react";
import { Breadcrumb, Li } from "@nuco/react";
import { type MetaFunction, Outlet, useLocation } from "react-router";
import { Anchor } from "~/components/Anchor/Anchor";
import { Nav } from "~/components/Nav/Nav";
import { getBreadcrumb } from "~/utils/getBreadcrumb";
import { getPageInfoMeta } from "~/utils/getPageInfoMeta";
import styles from "./docs.module.scss";

const DOCS_NAV = [
  {
    title: "Getting Started",
    children: [
      { title: "Overview", href: "/docs/web-components/overview" },
      { title: "Installation", href: "/docs/web-components/installation" },
    ],
  },
  {
    title: "Components",
    children: [
      { title: "Overview", href: "/docs/web-components/overview" },
      { title: "Installation", href: "/docs/web-components/installation" },
    ],
  },
] as const satisfies ComponentProps<typeof Nav>["links"];

// eslint-disable-next-line react-refresh/only-export-components
export const meta: MetaFunction = ({ location }) => {
  const pageInfo = getPageInfoMeta(location.pathname);
  return [
    ...pageInfo,
  ];
};

const Layout = () => {
  const location = useLocation();
  const breadcrumb = getBreadcrumb(location.pathname);

  return (
    <div className={styles["contents-container"]}>
      <div className={styles["nav-container"]}>
        <Nav links={DOCS_NAV} />
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
      </main>
    </div>
  );
};

export default Layout;
