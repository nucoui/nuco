import type { MDXComponents } from "mdx/types";
import { Anchor } from "@nuco/react/components/Anchor";
import { Button } from "@nuco/react/components/Button";
import { CodeBlock } from "@nuco/react/components/CodeBlock";
import { H1 } from "@nuco/react/components/H1";
import { H2 } from "@nuco/react/components/H2";
import { H3 } from "@nuco/react/components/H3";
import { H4 } from "@nuco/react/components/H4";
import { H5 } from "@nuco/react/components/H5";
import { H6 } from "@nuco/react/components/H6";
import { Input } from "@nuco/react/components/Input";
import { Li } from "@nuco/react/components/Li";
import { Option } from "@nuco/react/components/Option";
import { Select } from "@nuco/react/components/Select";
import { Ul } from "@nuco/react/components/Ul";

export const MDX_COMPONENTS: MDXComponents = {
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  h5: props => <H5 {...props} />,
  h6: props => <H6 {...props} />,
  a: props => <Anchor {...props} />,
  ul: props => <Ul {...props} />,
  li: props => <Li {...props} />,
  button: props => <Button {...props} />,
  input: props => <Input {...props} />,
  select: props => <Select {...props} />,
  option: props => <Option {...props} />,
  pre: props => (
    <CodeBlock
      lang={props.children.props.className.replace("language-", "")}
      code={props.children.props.children}
    />
  ),
};
