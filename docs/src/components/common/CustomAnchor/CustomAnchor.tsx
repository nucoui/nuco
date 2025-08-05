import type { ComponentProps, FC } from "react";
import { Anchor } from "@nuco/react/components/Anchor";
import { interpolatePath, type LinkProps, useNavigate } from "@tanstack/react-router";

type Props = Omit<ComponentProps<typeof Anchor>, "href"> & LinkProps;

export const CustomAnchor: FC<Props> = ({ href, underline, target, rel, disabled, onClick, children, ...linkProps }) => {
  const navigate = useNavigate();

  const handleClick = (event: Parameters<NonNullable<ComponentProps<typeof Anchor>["onClick"]>>[0]) => {
    event.detail?.preventDefault();
    event.detail?.stopPropagation();

    onClick?.(event);

    navigate({
      href,
      ...linkProps,
    });
  };

  return (
    <Anchor
      href={interpolatePath({
        path: href || linkProps.to,
        params: typeof linkProps.params === "object" && linkProps.params !== null
          ? linkProps.params
          : {},
      }).interpolatedPath}
      underline={underline}
      target={target}
      rel={rel}
      disabled={disabled}
      children={children}
      onClick={handleClick}
    />
  );
};
