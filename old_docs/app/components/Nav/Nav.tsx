import type { ComponentProps } from "react";
import type { Register } from "react-router";
import { NavAccordion } from "@nuco/react/components/NavAccordion";
import { Option } from "@nuco/react/components/Option";
import { Select } from "@nuco/react/components/Select";
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
  selectOptions?: ComponentProps<typeof Option>[];
  onChange?: (value: string) => void;
};

export const Nav = ({ links, selectOptions, onChange }: Props) => {
  return (
    <nav className={styles.nav}>
      {selectOptions
      && (
        <>
          <Select
            name="type"
            placeholder="Select Framework"
            onChange={(e) => {
              onChange?.(e.detail?.value ?? "");
            }}
          >
            {selectOptions.map(({ children, value, disabled, selected }) => (
              <Option key={value} value={value} disabled={disabled} selected={selected}>
                <div className={styles.option}>
                  {children}
                </div>
              </Option>
            ))}
          </Select>
          <hr />
        </>
      )}
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
