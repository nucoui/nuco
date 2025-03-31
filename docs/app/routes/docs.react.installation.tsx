import type { MetaFunction } from "react-router";
import { Badge, CodeBlock, Divider, H1, H3, H4 } from "@nuco/react";

export const meta: MetaFunction = () => {
  return [
    { title: "@nuco/core | Installation" },
    { name: "description", content: "Design system library that Transcends Framework boundaries" },
  ];
};

const Page = () => {
  return (
    <>
      <H1>
        Getting Started with React
        <Badge type="warning" text="experimental" />
      </H1>
      <p>
        Explains how to use components that support CSR and SSR in React 19
      </p>
      <Divider textPosition="center" />
      <H3>1. Installation</H3>
      <CodeBlock lang="shell" code="npm i @nuco/core @nuco/react @nuco/variable" />
      <H3>2. Setup</H3>
      <H4>2.1. Import CSS</H4>
      <p>Put the following code in the root file of the project (main.tsx or root.tsx)</p>
      <CodeBlock
        lang="ts"
        fileName="root.tsx"
        code={`import "@nuco/variable/css"`}
      />
      <H4>2.2. Done !</H4>
      <CodeBlock
        lang="ts"
        fileName="root.tsx"
        code={`import { Button } from "@nuco/react";

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
};

export default Page;
