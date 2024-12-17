import type { CssVariablesValue } from "./generateCssVariables";
import fs from "node:fs";
import path from "node:path";

export const generateCustomData = (cssVariables: CssVariablesValue) => {
  // Custom Data Extensionファイルのパス
  const customDataFilePath = path.resolve(__dirname, "../../../dist/css/variables.css-data.json");

  const properties = cssVariables.map(({ key }) => ({
    name: key,
    description: `CSS variable ${key}`,
  }));

  // Custom Data ExtensionのJSONオブジェクトを作成
  const customData = {
    version: 1.1,
    properties,
  };

  // JSONファイルに書き込む
  fs.writeFileSync(customDataFilePath, JSON.stringify(customData, null, 2));
};
