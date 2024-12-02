/// <reference types="vite/client" />

declare namespace React {
  declare namespace JSX {
    interface IntrinsicElements {
      "nuko-input": React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >;
    }
  }
}
