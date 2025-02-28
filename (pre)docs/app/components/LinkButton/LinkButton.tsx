import type { ComponentProps } from "react";
import { Button } from "@nuco/react";
import { useLocation, useNavigate } from "@tanstack/react-router";

export const LinkButton = ({ onClick, children, ...props }: Omit<ComponentProps<typeof Button>, "type">) => {
  const location = useLocation();
  const navigate = useNavigate({ from: location.pathname as any });

  const handleClick = (e: Parameters<NonNullable<typeof onClick>>[0]) => {
    onClick?.(e);

    if (props.disabled)
      return;

    e.preventDefault();
    navigate({ to: props.href });
  };

  return (
    <Button
      type="anchor"
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
};
