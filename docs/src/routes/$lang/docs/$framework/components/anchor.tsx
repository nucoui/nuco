import { Badge } from "@nuco/react/components/Badge";
import { CodeBlock } from "@nuco/react/components/CodeBlock";
import { H1 } from "@nuco/react/components/H1";
import { H3 } from "@nuco/react/components/H3";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/$lang/docs/$framework/components/anchor",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <H1>
        Anchor
        <Badge text="stabled"></Badge>
      </H1>
      <H3>Path</H3>
      <CodeBlock lang="ts" code="import { Anchor } from '@nuco/react/components/Anchor';" />
      <H3>Usage</H3>
      <CodeBlock
        lang="tsx"
        fileName="page.tsx"
        code={`<Anchor href="https://nuco.takumaru.dev" target="_blank">
  Nuco Documentation
</Anchor>`}
      />
      <H3>Props</H3>
      <CodeBlock
        lang="ts"
        code={`type Props = {
  /**
   * The URL that the hyperlink points to
   */
  href?: string;
  /**
   * Where to display the linked URL
   * @default undefined
   */
  target?: "_blank" | "_self" | "_parent" | "_top";
  /**
   * The relationship of the linked URL
   */
  rel?: string;
  /**
   * The style of the underline for the link
   * @default "none"
   */
  underline?: "none" | "solid" | "dashed" | "dotted";
  /**
   * Whether the link is disabled
   * @default false
   */
  disabled?: boolean;
};

type Emits = {
  /**
   * Fired when the link is clicked
   */
  "on-click"?: Event;
};`}
      />
    </>
  );
}
