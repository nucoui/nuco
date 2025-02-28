import type { ComponentProps, PropsWithChildren } from "react";
import { Anchor as NAnchor } from "@nuco/react";

import { Link } from "@tanstack/react-router";

type Props = PropsWithChildren<
  Omit<
    ComponentProps<typeof Link>,
    "children"
  > & {
    target?: ComponentProps<typeof NAnchor>["target"];
    underline?: ComponentProps<typeof NAnchor>["underline"];
  }
>;

export const Anchor = ({ children, ...props }: Props) => {
  return (
    <Link {...props}>
      <NAnchor
        href=""
        target={props.target}
        underline={props.underline}
      >
        <>
          {children}
        </>
      </NAnchor>
    </Link>
  );
};
