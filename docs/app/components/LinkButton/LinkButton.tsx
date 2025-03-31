import type { ComponentProps } from "react";
import { Button } from "@nuco/react/components/Button";
import { useNavigate } from "react-router";
import type { Nav } from "~/components/Nav/Nav";

type Props = Omit<ComponentProps<typeof Button>, "type" | "href"> & {
  href: NonNullable<ComponentProps<typeof Nav>["links"][number]["href"]>;
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
