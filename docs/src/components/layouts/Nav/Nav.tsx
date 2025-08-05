import type { LinkProps } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { CustomAnchor } from "@/components/common/CustomAnchor/CustomAnchor";
import { NavAccordion } from "@nuco/react/components/NavAccordion";
import { Option } from "@nuco/react/components/Option";
import { Select } from "@nuco/react/components/Select";
import styles from "./Nav.module.scss";

type Props = {
  links: ({
    title: string;
  } & ({
    props: LinkProps;
    children?: Props["links"];
  } | {
    props?: never;
    children: Props["links"];
  }))[];
  selectOptions?: ComponentProps<typeof Option>[];
  onChange?: (value: string) => void;
};

/**
 * Recursive navigation item component that renders NavAccordion for items with children
 * and CustomAnchor for items with props
 */
const NavItem = ({ link }: { link: Props["links"][0] }) => {
  const { title, children, props } = link;

  return (
    <>
      {
        children && (
          <NavAccordion>
            <span slot="summary">{title}</span>
            <div className={styles.children}>
              {children.map(childLink => (
                <NavItem key={childLink.title} link={childLink} />
              ))}
            </div>
          </NavAccordion>
        )
      }
      {
        props && (
          <CustomAnchor
            {...(props as React.ComponentProps<typeof CustomAnchor>)}
            underline="dashed"
          >
            {title}
          </CustomAnchor>
        )
      }
    </>
  );
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
      <div className={styles.links}>
        {links.map(link => (
          <NavItem key={link.title} link={link} />
        ))}
      </div>
    </nav>
  );
};
