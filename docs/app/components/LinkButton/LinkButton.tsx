import type { ComponentProps } from "react";
import { Button } from "@nuco/react";
import { type To, useNavigate } from "react-router";

type Props = Omit<ComponentProps<typeof Button>, "type" | "href"> & {
  href: To;
};

export const LinkButton = ({ onClick, children, href, ...props }: Props) => {
  const navigate = useNavigate();

  const handleClick = (e: Parameters<NonNullable<typeof onClick>>[0]) => {
    onClick?.(e);

    if (props.disabled)
      return;

    e.preventDefault();
    navigate(href);
  };

  return (
    <Button
      type="anchor"
      onClick={handleClick}
      href={href as string}
      {...props}
    >
      {children}
    </Button>
  );
};
