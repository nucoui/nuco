// Override default ?raw behavior for SCSS files to return compiled CSS
declare module "*.scss?raw" {
  const content: string;
  export default content;
}

declare module "*.sass?raw" {
  const content: string;
  export default content;
}

declare module "*.scss.virtual-rawcss" {
  const content: string;
  export default content;
}

declare module "*.sass.virtual-rawcss" {
  const content: string;
  export default content;
}
