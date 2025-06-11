import { Button, NButtonStyle } from "@/components/NButton";
import { type ComponentProps, functionalDeclarativeCustomElement } from "chatora";

const DeclarativeCustomElements = {
  "n-button": (props: ComponentProps<typeof Button>) => functionalDeclarativeCustomElement(Button, { styles: [NButtonStyle], props }),
};

export {
  DeclarativeCustomElements as default,
  DeclarativeCustomElements,
};
