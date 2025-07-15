import { Button } from "@nuco/react/components/Button";
import { H1 } from "@nuco/react/components/H1";
import { H2 } from "@nuco/react/components/H2";
import { H3 } from "@nuco/react/components/H3";
import { H4 } from "@nuco/react/components/H4";
import { H5 } from "@nuco/react/components/H5";
import { H6 } from "@nuco/react/components/H6";
import { Input } from "@nuco/react/components/Input";

export default function Page() {
  return (
    <>
      <H1>Path : /</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6>Heading 6</H6>
      <p>p</p>
      <form
        action={(formData) => {
          // eslint-disable-next-line no-console
          console.log(formData.get("test"));
        }}
      >
        <Input name="test" type="text" placeholder="test" />
        <Button type="submit">Submit</Button>
      </form>
      <div
        style={{
          height: "200dvh",
          backgroundColor: "var(--cs-background-secondary)",
        }}
      >
      </div>
    </>
  );
};
