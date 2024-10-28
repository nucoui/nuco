import fs from "node:fs";
import path from "node:path";

export const generateCustomData = () => {
// CSSファイルのパス
  const cssFilePath = path.resolve(__dirname, "../../dist/css/variables.css");

  // Custom Data Extensionファイルのパス
  const customDataFilePath = path.resolve(__dirname, "../../dist/css/variables.css-data.json");

  // CSSファイルを読み込む
  const cssContent = fs.readFileSync(cssFilePath, "utf-8");

  // CSS変数を抽出する正規表現
  // eslint-disable-next-line regexp/no-super-linear-backtracking
  const cssVariableRegex = /--([\w-]+):\s*([^;]+);/g;

  const properties = [];
  let match = cssVariableRegex.exec(cssContent);

  while (match !== null) {
    const name = `--${match[1]}`;
    const description = `CSS variable ${name}`;
    properties.push({
      name,
      description,
    });
    match = cssVariableRegex.exec(cssContent);
  }

  // Custom Data ExtensionのJSONオブジェクトを作成
  const customData = {
    version: 1.1,
    properties,
  };

  // JSONファイルに書き込む
  fs.writeFileSync(customDataFilePath, JSON.stringify(customData, null, 2));
};
