import type { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { NavAccordion } from "@nuco/react";
import { Fragment } from "react/jsx-runtime";
import { LinkButton } from "~/components/LinkButton/LinkButton";
import styles from "./Nav.module.scss";

type Props = {
  links: ({
    title: string;
  } & ({
    href: ComponentProps<typeof Link>["to"];
    children?: Props["links"];
  } | {
    href?: never;
    children: Props["links"];
  }))[];
};

export const Nav = ({ links }: Props) => {
  return (
    <nav className={styles.nav}>
      {links.map(({ title, href, children }) => (
        <Fragment key={title}>
          {href
            ? (
                <LinkButton
                  variant="tertiary"
                  width="auto"
                  size="small"
                  href={href}
                >
                  {title}
                </LinkButton>
              )
            : (
                <NavAccordion>
                  <span slot="summary">{title}</span>
                  <div className={styles.children}>
                    {children?.map(({ title, href }) => (
                      <LinkButton
                        key={title}
                        variant="tertiary"
                        width="auto"
                        size="small"
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
  );
};
