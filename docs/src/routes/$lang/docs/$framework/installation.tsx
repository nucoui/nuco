import { CodeBlock } from "@nuco/react/components/CodeBlock";
import { Divider } from "@nuco/react/components/Divider";
import { H1 } from "@nuco/react/components/H1";
import { H3 } from "@nuco/react/components/H3";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/$lang/docs/$framework/installation")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <H1>Installation</H1>
      <p>
        This section provides detailed instructions on how to install the
        framework in your project.
      </p>
      <Divider />
      <H3>1. Install packages</H3>
      <CodeBlock lang="shell" fileName="install.sh" code="npm install @nuco/core @nuco/variable" />
      <H3>2. Import Base style</H3>
      <CodeBlock
        lang="html"
        fileName="index.html"
        code={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@nuco/variable@latest/dist/css/variables.css" />`}
      />
      <CodeBlock
        lang="tsx"
        fileName="page.tsx"
        code={`import { Button } from "@nuco/react/components/Button";
      
      const Page = () => {
        return (
          <>
            <Button
              type="primary"
              onClick={() => alert("Hello, World!")}
            >
              Hello, World!
            </Button>
          </>
        );
      }
      
      export default Page;
      `}
      />
    </>
  );
}
