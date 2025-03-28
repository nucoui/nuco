import { Badge, CodeBlock, Divider, H1, H3 } from "@nuco/react";

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
      <H3>Installation</H3>
      <CodeBlock lang="shell" code="npm i @nuco/core @nuco/react @nuco/variable" />
    </>
  );
};

export default Page;
