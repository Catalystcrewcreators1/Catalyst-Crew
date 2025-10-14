/// <reference types="vite/client" />

// Declare module for .tsx files
declare module "*.tsx" {
  const component: React.ComponentType<React.PropsWithChildren<Record<string, unknown>>>;
  export default component;
}

// Declare module for .ts files
declare module "*.ts" {
  const content: Record<string, unknown>;
  export default content;
}

// Declare module for image files
declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

declare module "*.svg" {
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export { ReactComponent };
  export default src;
}
