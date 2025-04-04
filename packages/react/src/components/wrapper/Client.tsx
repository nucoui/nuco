import type { ReactNode } from "react";
import { useSyncExternalStore } from "react";

export interface ClientOnlyProps {
  children: ReactNode;
  serverChildren?: ReactNode | undefined;
}

const noop = () => void 0;

export const Client = (props: ClientOnlyProps): ReactNode => {
  const { children, serverChildren } = props;

  const isClient = useSyncExternalStore(
    () => noop,
    () => true,
    () => false,
  );

  if (!isClient) {
    return serverChildren;
  }

  return <>{children}</>;
};
