import type { ComponentProps, PropsWithChildren } from "react";
import { Anchor as NAnchor } from "@nuco/react/components/Anchor";
import { type Link, useNavigate } from "react-router";

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
  const navigate = useNavigate();

  const handleClick = (e: React.SyntheticEvent<HTMLElement, Event>) => {
    e.preventDefault();
    navigate(props.to);
  };

  return (
    <NAnchor
      href={props.to as string}
      target={props.target}
      underline={props.underline}
      onClick={handleClick}
    >
      <>
        {children}
      </>
    </NAnchor>
  );
};
