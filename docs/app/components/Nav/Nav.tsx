import type { Register } from "react-router";
import { NavAccordion, Option, Select } from "@nuco/react";
import FamiconsLogoWebComponent from "~icons/famicons/logo-web-component?width=1.5rem&height=1.5rem";
import MdiAngular from "~icons/mdi/angular?width=1.5rem&height=1.5rem";
import MdiReact from "~icons/mdi/react?width=1.5rem&height=1.5rem";
import MdiVuejs from "~icons/mdi/vuejs?width=1.5rem&height=1.5rem";
import RiSvelteFill from "~icons/ri/svelte-fill?width=1.5rem&height=1.5rem";
import { Fragment } from "react/jsx-runtime";
import { Anchor } from "~/components/Anchor/Anchor";
import styles from "./Nav.module.scss";

type FileRoutesByPathKey = keyof Register["params"];

type Props = {
  links: ({
    title: string;
  } & ({
    href: FileRoutesByPathKey;
    children?: Props["links"];
  } | {
    href?: never;
    children: Props["links"];
  }))[];
};

const SELECT = [
  {
    element: <>
      <FamiconsLogoWebComponent />
      Web Components
    </>,
    value: "web-components",
  },
  {
    element: <>
      <MdiVuejs />
      Vue
    </>,
    value: "vue",
  },
  {
    element: <>
      <MdiReact />
      React
    </>,
    value: "react",
  },
  {
    element: <>
      <MdiAngular />
      Angular
    </>,
    value: "angular",
  },
  {
    element: <>
      <RiSvelteFill />
      Svelte
    </>,
    value: "svelte",
  },
] as const satisfies { element: React.ReactNode; value: string }[];

export const Nav = ({ links }: Props) => {
  return (
    <nav className={styles.nav}>
      <Select
        name="type"
        placeholder="Select Framework"
      >
        {SELECT.map(({ element, value }) => (
          <Option key={value} value={value}>
            <div className={styles.option}>
              {element}
            </div>
          </Option>
        ))}
      </Select>
      <hr />
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
