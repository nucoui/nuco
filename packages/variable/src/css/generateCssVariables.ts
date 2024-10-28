import type { ObjectLiteralExpression } from "ts-morph";
import fs from "node:fs";
import path from "node:path";
import { Project, SyntaxKind } from "ts-morph";

const getNestObjectLiteralValue = (objectLiteralExpression: ObjectLiteralExpression, variableName: string, keyName?: string, values?: Array<Record<string, string>>) => {
  const getVariablesSymbol = () => {
    switch (variableName) {
      case "permissibleColor":
        return "p";
      case "semanticColor":
        return "s";
      default:
        return "v";
    }
  };
  const variablesSymbol = getVariablesSymbol();

  objectLiteralExpression.getProperties().forEach((property) => {
    const kind = property.getKind();

    if (kind === SyntaxKind.PropertyAssignment) {
      const propertyAssignment = property.asKindOrThrow(SyntaxKind.PropertyAssignment);

      const propertyName = propertyAssignment.getName();
      const propertyAssignmentInitializer = propertyAssignment.getInitializer();

      if (!propertyAssignmentInitializer) {
        throw new Error("Property Assignment Initializer is missing");
      }

      const propertyAssignmentInitializerKind = propertyAssignmentInitializer.getKind();

      if (propertyAssignmentInitializerKind === SyntaxKind.ObjectLiteralExpression) {
        const nestedObjectLiteralExpression = propertyAssignmentInitializer.asKindOrThrow(SyntaxKind.ObjectLiteralExpression);
        getNestObjectLiteralValue(nestedObjectLiteralExpression, variableName, keyName ? `${keyName}-${propertyName}` : propertyName, values);
      }
      else if (propertyAssignmentInitializerKind === SyntaxKind.ElementAccessExpression) {
        const elementAccessExpression = propertyAssignmentInitializer.asKindOrThrow(SyntaxKind.ElementAccessExpression);
        const arrayNameList = elementAccessExpression.getExpression().getText().split(".");
        const arrayParentName = arrayNameList.includes("permissibleColor") ? "p" : arrayNameList.find(name => name.match("permissibleColor")) || "";
        const arrayName = arrayNameList.filter(name => !name.match("permissibleColor")).join(".");
        const index = elementAccessExpression.getArgumentExpressionOrThrow().getText();

        /* console.group("Property");
        console.log("Kind:", propertyAssignmentInitializer.getKindName());
        console.log("Name:", keyName ? `--${keyName}-${propertyName}` : `--${propertyName}`);
        console.log("Array Parent Name:", arrayParentName);
        console.log("Array Name:", arrayName);
        console.log("Index:", index);
        console.dir({
          key: keyName ? `--${keyName}-${propertyName}` : `--${propertyName}`,
          value: `var(--${arrayParentName}-${arrayName}-${index})`,
        });
        console.groupEnd(); */

        return values?.push({
          key: keyName ? `--${variablesSymbol}-${keyName}-${propertyName}` : `--${propertyName}`,
          value: `var(--${arrayParentName}-${arrayName}-${index})`,
        });
      }
      else {
        /* console.group("Property");
        console.log("Kind:", propertyAssignmentInitializer.getKindName());
        console.log("Name:", keyName ? `--p-${keyName}-${propertyName}` : `--p-${propertyName}`);
        console.log("Assignment Initializer Value:", propertyAssignmentInitializer.getText());
        console.dir({
          key: keyName ? `--p-${keyName}-${propertyName}` : `--${propertyName}`,
          value: propertyAssignmentInitializer.getText(),
        });
        console.groupEnd(); */

        return values?.push({
          key: keyName ? `--${variablesSymbol}-${keyName}-${propertyName}` : `--${propertyName}`,
          value: propertyAssignmentInitializer.getText().replace(/"/g, ""),
        });
      }
    }
  });
};

export const generateCssVariables = (file: string, variableName: string) => {
  const project = new Project({
    tsConfigFilePath: "tsconfig.json",
  });

  const sourceFile = project.getSourceFileOrThrow(file);
  const rootCssVariables = sourceFile.getVariableDeclarationOrThrow(variableName);

  const rootCssVariablesInitializer = rootCssVariables.getInitializer();

  if (!rootCssVariablesInitializer) {
    throw new Error("Root CSS Variables initializer is missing");
  }

  const rootCssVariablesObjectExpression = rootCssVariablesInitializer.asKindOrThrow(SyntaxKind.SatisfiesExpression).getExpressionIfKindOrThrow(SyntaxKind.AsExpression).getExpressionIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

  const values: Array<Record<string, string>> = [];

  getNestObjectLiteralValue(rootCssVariablesObjectExpression, variableName, undefined, values);

  /* console.log("Values:", values); */

  const outputDir = path.resolve(__dirname, "../../dist/css");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const permissibleColorCssVariablesText = `:root {\n${values.map(({ key, value }) => `  ${key}: ${value};\n`).join("")}}\n`;

  fs.writeFileSync(path.join(outputDir, `${variableName}.css`), permissibleColorCssVariablesText);

  return values;
};
