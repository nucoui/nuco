import { Badge } from "@nuco/react/components/Badge";
import { CodeBlock } from "@nuco/react/components/CodeBlock";
import { H1 } from "@nuco/react/components/H1";
import { H3 } from "@nuco/react/components/H3";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { ofetch } from "ofetch";

export const Route = createFileRoute("/$lang/docs/$framework/components/anchor")({
  loader: async ({ params }) => {
    const data = await ofetch("/api/heartbeat/");
    console.log(data);

    const { framework } = params;
    switch (framework) {
      case "react": {
        return {
          framework,
          code: {
            importCode: "import { Anchor } from '@nuco/react/components/Anchor';",
            usageCode: `<Anchor href=\"https://nuco.takumaru.dev\" target=\"_blank\">\n  Nuco Documentation\n</Anchor>`,
            propsCode: `type Props = {\n  /**\n   * The URL that the hyperlink points to\n   */\n  href?: string;\n  /**\n   * Where to display the linked URL\n   * @default undefined\n   */\n  target?: \"_blank\" | \"_self\" | \"_parent\" | \"_top\";\n  /**\n   * The relationship of the linked URL\n   */\n  rel?: string;\n  /**\n   * The style of the underline for the link\n   * @default \"none\"\n   */\n  underline?: \"none\" | \"solid\" | \"dashed\" | \"dotted\";\n  /**\n   * Whether the link is disabled\n   * @default false\n   */\n  disabled?: boolean;\n};`,
            emitsCode: `type Emits = {\n  /**\n   * Fired when the link is clicked\n   */\n  \"onClick\"?: Event;\n};`,
          },
        };
      }
      case "web-components":
      default: {
        return {
          framework,
          code: {
            importCode: "<script\n  type=\"module\"\n  src=\"https://cdn.jsdelivr.net/npm/@nuco/core@latest/dist/packages/core/src/elements/customElements.js\"\n>\n  if(!customElements.get(\"n-anchor\")) {\n    customElements.define(\"n-anchor\", CustomElements[\"n-anchor\"]);\n  }\n</script>",
            usageCode: `<n-anchor href=\"https://nuco.takumaru.dev\" target=\"_blank\">\n  Nuco Documentation\n</n-anchor>`,
            propsCode: `type Props = {\n  /**\n   * The URL that the hyperlink points to\n   */\n  href?: string;\n  /**\n   * Where to display the linked URL\n   * @default undefined\n   */\n  target?: \"_blank\" | \"_self\" | \"_parent\" | \"_top\";\n  /**\n   * The relationship of the linked URL\n   */\n  rel?: string;\n  /**\n   * The style of the underline for the link\n   * @default \"none\"\n   */\n  underline?: \"none\" | \"solid\" | \"dashed\" | \"dotted\";\n  /**\n   * Whether the link is disabled\n   * @default false\n   */\n  disabled?: boolean;\n};`,
            emitsCode: `type Emits = {\n  /**\n   * Fired when the link is clicked\n   */\n  \"on-click\"?: Event;\n};`,
          },
        };
      }
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { framework, code } = useLoaderData({ from: "/$lang/docs/$framework/components/anchor" });

  return (
    <>
      <H1>
        Anchor
        <Badge text="stabled" />
      </H1>
      <H3>Import</H3>
      <CodeBlock lang={framework === "web-components" ? "html" : "ts"} code={code.importCode} />
      <H3>Usage</H3>
      <CodeBlock
        lang={framework === "vue" ? "html" : framework === "web-components" ? "html" : "tsx"}
        fileName={framework === "vue" ? "Component.vue" : framework === "svelte" ? "Component.svelte" : framework === "web-components" ? "Component.html" : "Component.tsx"}
        code={code.usageCode}
      />
      <H3>Props</H3>
      <CodeBlock
        lang="ts"
        code={code.propsCode}
      />
      <H3>Emits</H3>
      <CodeBlock
        lang="ts"
        code={code.emitsCode}
      />
    </>
  );
}
