import type { Link } from "@tanstack/react-router";
import { Breadcrumb, Li, NavAccordion } from "@nuco/react";
import { createFileRoute, ErrorComponent, Outlet, useLocation } from "@tanstack/react-router";
import { type ComponentProps, Fragment } from "react";
import { LinkButton } from "~/components/LinkButton/LinkButton";
import { Anchor } from "../components/Anchor/Anchor";
import { NotFound } from "../components/layouts/NotFound/NotFound";
import { getBreadcrumb } from "../utils/getBreadcrumb";
import styles from "./docs.module.scss";

type Nav = {
  title: string;
  href?: ComponentProps<typeof Link>["to"];
  children?: Nav[];
} & ({
  href: ComponentProps<typeof Link>["to"];
  children?: Nav[];
} | {
  href?: never;
  children: Nav[];
});

const NAV = [{
  title: "Getting Started",
  children: [
    { title: "Overview", href: "/docs/web-components/overview" },
    { title: "Installation", href: "/docs/web-components/installation" },

  ],
}] as Nav[];

export const Route = createFileRoute("/docs")({
  errorComponent: ErrorComponent,
  notFoundComponent: NotFound,
  component: RouteComponent,
});

function RouteComponent() {
  const location = useLocation();
  const breadcrumb = getBreadcrumb(location.pathname);

  return (
    <div className={styles["contents-container"]}>
      <nav className={styles.nav}>
        {NAV.map(({ title, href, children }) => (
          <Fragment key={title}>
            {href
              ? (
                  <LinkButton
                    type="anchor"
                    variant="tertiary"
                    width="auto"
                    href={href}
                  >
                    {title}
                  </LinkButton>
                )
              : (
                  <NavAccordion>
                    <span slot="summary">{title}</span>
                    <div>
                      {children?.map(({ title, href }) => (
                        <LinkButton
                          key={title}
                          type="anchor"
                          variant="tertiary"
                          width="auto"
                          href={href}
                        >
                          {title}
                        </LinkButton>
                      ))}
                    </div>
                  </NavAccordion>
                )}
          </Fragment>
        ))}
      </nav>
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
                      <Anchor to={to} color="secondary">{shortTitle}</Anchor>
                    </Li>
                  );
            })}
          </Breadcrumb>
        </div>

        <Outlet />

      </main>
    </div>
  );
}
