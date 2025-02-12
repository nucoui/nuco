import type { NButtonEmits, NButtonProps } from "@nuco/core";
import type { JSX } from "react";
import { Client } from "@/components/Client";
import { NucoWrapper, type Props } from "@/components/NucoWrapper";
import { styleNButton } from "@nuco/core";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

type ElementType = HTMLButtonElement;

export const Button = (props: Props<ElementType, NButtonProps, NButtonEmits>) => {
  // const serverChildren = _jsx(
  //   "n-button" as any,
  //   {
  //     children: _jsxs("template", {
  //       suppressHydrationWarning: true,
  //       shadowrootmode: "open",
  //       children: [
  //         _jsx("style", {
  //           children: styleNButton,
  //         }, void 0),
  //         _jsx("button", {
  //           className: "n-button -primary",
  //           type: "button",
  //           children: _jsx("span", {
  //             className: "contents",
  //             children: _jsx("slot", {
  //               // eslint-disable-next-line react/prefer-destructuring-assignment
  //               children: props.children,
  //             }, void 0),
  //           }, void 0),
  //         }, void 0),
  //       ],
  //     }, void 0),
  //   },
  //   void 0,
  // ) as JSX.Element;

  const serverChildren = _jsxs(
    "n-button" as any,
    {
      children: [
        _jsx("style", {
          children: styleNButton,
        }, void 0),
        _jsx("button", {
          className: "n-button -primary",
          type: "button",
          children: _jsx("span", {
            className: "contents",
            children: _jsx("slot", {
              // eslint-disable-next-line react/prefer-destructuring-assignment
              children: props.children,
            }, void 0),
          }, void 0),
        }, void 0),
      ],
    },
    void 0,
  ) as JSX.Element;

  return (
    <Client
      serverChildren={serverChildren}
    >
      <NucoWrapper<ElementType, NButtonProps, NButtonEmits> elementName="n-button" props={props} />
    </Client>
  );
};
