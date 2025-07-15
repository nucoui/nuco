import type { ComponentProps, PropsWithChildren } from "react";
import { Anchor as NAnchor } from "@nuco/react/components/Anchor";
import { useEffect, useState } from "react";

type Props = PropsWithChildren<{
  to: string;
  target?: ComponentProps<typeof NAnchor>["target"];
  underline?: ComponentProps<typeof NAnchor>["underline"];
}>;

export const Anchor = ({ children, to, target, underline }: Props) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = (payload: CustomEvent<Event | undefined>) => {
    if (!isClient) {
      // SSR時は標準のリンクとして動作
      return;
    }

    // CSR時はプログラマティックなナビゲーション
    payload.preventDefault?.();
    window.history.pushState({}, "", to);

    // React Router にナビゲーションイベントを通知
    const event = new PopStateEvent("popstate", { state: {} });
    window.dispatchEvent(event);
  };

  return (
    <NAnchor
      href={to}
      target={target}
      underline={underline}
      onClick={handleClick}
    >
      <>
        {children}
      </>
    </NAnchor>
  );
};
