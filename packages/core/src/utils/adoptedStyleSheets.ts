import base from "../styles/base.css?inline";
import reset from "../styles/reset.css?inline";

const baseAdoptedStyleSheets = new CSSStyleSheet();
baseAdoptedStyleSheets.replaceSync(base);

const resetAdoptedStyleSheets = new CSSStyleSheet();
resetAdoptedStyleSheets.replaceSync(reset);

export { baseAdoptedStyleSheets, resetAdoptedStyleSheets };
