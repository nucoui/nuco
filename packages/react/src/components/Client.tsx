import React from "react";

export interface ClientOnlyProps {
  children: React.ReactNode;
  serverChildren?: React.ReactNode | undefined;
}

const noop = () => void 0;

export const Client = (props: ClientOnlyProps): React.ReactNode => {
  const { children, serverChildren } = props;

  const isClient = React.useSyncExternalStore(
    () => noop,
    () => true,
    () => false,
  );

  if (!isClient) {
    return serverChildren;
  }

  return <>{children}</>;
};
