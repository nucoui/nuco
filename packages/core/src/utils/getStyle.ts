export const getStyle = (component: any) => {
  if (component.styles && component.styles.length > 0) {
    return component.styles[0] as string;
  }

  return "";
};
