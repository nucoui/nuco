import { Badge, H1 } from "@nuco/react";

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
      <hr />
    </>
  );
};

export default Page;
