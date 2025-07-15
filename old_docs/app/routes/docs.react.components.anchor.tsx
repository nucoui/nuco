import { Anchor } from "@nuco/react/components/Anchor";
import { CodeBlock } from "@nuco/react/components/CodeBlock";
import { Divider } from "@nuco/react/components/Divider";
import { H1 } from "@nuco/react/components/H1";
import { H2 } from "@nuco/react/components/H2";

const Page = () => {
  return (
    <>
      <H1>Anchor</H1>
      <Divider />
      <H2>Example</H2>
      <div>
        <Anchor href="">Anchor</Anchor>
      </div>
      <H2>Usage</H2>
      <CodeBlock lang="tsx" code={`import { Anchor } from "@nuco/react/components/Anchor";`}></CodeBlock>
      <H2>Props</H2>
    </>
  );
};

export default Page;
