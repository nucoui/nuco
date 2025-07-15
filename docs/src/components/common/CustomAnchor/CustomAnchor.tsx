import type { LinkComponent } from "@tanstack/react-router";
import type { ComponentProps, Ref } from "react";
import { Anchor } from "@nuco/react/components/Anchor";
import { createLink } from "@tanstack/react-router";

type Props = ComponentProps<typeof Anchor> & {
  ref?: Ref<HTMLAnchorElement>;
};

const CustomAnchorLinkComponent = ({ ref, ...props }: Props) => {
  return (
    <Anchor
      ref={ref}
      {...props}
    />
  );
};

const CreatedCustomAnchorLinkComponent = createLink(CustomAnchorLinkComponent);

export const CustomAnchor: LinkComponent<typeof CustomAnchorLinkComponent> = (props) => {
  return <CreatedCustomAnchorLinkComponent preload="intent" {...props} />;
};
