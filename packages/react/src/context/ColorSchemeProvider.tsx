import type { ContextValue } from "@/context/ColorScheme";
import type { ReactNode } from "react";
import { ColorSchemeContext } from "@/main";
import { defineColorScheme, getColorScheme } from "@nuco/variable";
import { useEffect, useLayoutEffect, useState } from "react";

type Props = {
  children?: ReactNode;
};

export const ColorSchemeProvider = ({ children }: Props) => {
  const [colorSchemeState, setColorSchemeState] = useState<ContextValue>("light");

  useLayoutEffect(() => {
    defineColorScheme();
  }, []);

  useEffect(() => {
    const newScheme = getColorScheme();
    setColorSchemeState(newScheme);

    const targetNode = document.documentElement; // <html>要素を監視対象にする
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === "attributes" && mutation.attributeName?.startsWith("data-")) {
          const newScheme = getColorScheme();
          setColorSchemeState(newScheme);
        }
      }
    });

    observer.observe(targetNode, {
      attributes: true, // 属性の変更を監視
      attributeFilter: ["data-color-scheme"], // 監視する属性を指定
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ColorSchemeContext.Provider value={colorSchemeState}>
      {children}
    </ColorSchemeContext.Provider>
  );
};
