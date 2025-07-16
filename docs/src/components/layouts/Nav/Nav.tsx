import type { LinkProps } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { CustomAnchor } from "@/components/common/CustomAnchor/CustomAnchor";
import { NavAccordion } from "@nuco/react/components/NavAccordion";
import { Option } from "@nuco/react/components/Option";
import { Select } from "@nuco/react/components/Select";
import { Fragment } from "react/jsx-runtime";
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
        {links.map(({ title, children, props }) => (
          <Fragment key={title}>
            {props
              ? (
                  <CustomAnchor
                    key={title}
                    underline="none"
                    to={props.to}
                    {...(props as React.ComponentProps<typeof CustomAnchor>)}
                  >
                    {title}
                  </CustomAnchor>
                )
              : (
                  <NavAccordion>
                    <span slot="summary">{title}</span>
                    <div className={styles.children}>
                      {children?.map(({ title, props }) =>
                        props?.to !== undefined
                          ? (
                              <CustomAnchor
                                key={title}
                                {...(props as React.ComponentProps<typeof CustomAnchor>)}
                                underline="dashed"
                              >
                                {title}
                              </CustomAnchor>
                            )
                          : null,
                      )}
                    </div>
                  </NavAccordion>
                )}
          </Fragment>
        ))}
      </div>
    </nav>
  );
};
