import type { ComponentProps } from "react";
import type { Link } from "react-router";
import { NavAccordion } from "@nuco/react";
import { Fragment } from "react/jsx-runtime";
import { Anchor } from "~/components/Anchor/Anchor";
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
                <Anchor
                  key={title}
                  to={href}
                  underline="none"
                >
                  {title}
                </Anchor>
              )
            : (
                <NavAccordion>
                  <span slot="summary">{title}</span>
                  <div className={styles.children}>
                    {children?.map(({ title, href }) => (
                      <Anchor
                        key={title}
                        to={href as string}
                        underline="none"
                      >
                        {title}
                      </Anchor>
                    ))}
                  </div>
                </NavAccordion>
              )}
        </Fragment>
      ))}
    </nav>
  );
};
