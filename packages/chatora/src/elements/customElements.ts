import { Button, NButtonStyle } from "@/components/NButton";
import { functionalCustomElement } from "chatora";

const CustomElements = {
  "n-button": functionalCustomElement(Button, { styles: [NButtonStyle] }),
};

export {
  CustomElements as default,
  CustomElements,
};
