import type { ObjectLiteralExpression } from "ts-morph";
import { Project, SyntaxKind } from "ts-morph";

const getNestObjectLiteralValue = (objectLiteralExpression: ObjectLiteralExpression, variableName: string, keyName?: string, values?: Array<Record<string, string>>) => {
  const getVariablesSymbol = () => {
    switch (variableName) {
      case "permissibleColor":
        return "p";
      case "semanticColor":
        return "s";
      case "numeric":
        return "n";
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

        return values?.push({
          key: keyName ? `--${variablesSymbol}-${keyName}-${propertyName}` : `--${variablesSymbol}-${propertyName}`,
          value: `var(--${arrayParentName}-${arrayName}-${index})`,
        });
      }
      else {
        const value = propertyAssignmentInitializer.getText().replace(/"/g, "");

        return values?.push({
          key: keyName ? `--${variablesSymbol}-${keyName}-${propertyName}` : `--${variablesSymbol}-${propertyName}`,
          value,
        });
      }
    }
  });
};

export type CssVariablesValue = Array<Record<string, string>>;

export const generateCssVariables = (file: string, variableName: string): CssVariablesValue => {
  const project = new Project({
    tsConfigFilePath: "tsconfig.json",
  });

  const sourceFile = project.getSourceFileOrThrow(file);
  const rootCssVariables = sourceFile.getVariableDeclarationOrThrow(variableName);

  const rootCssVariablesInitializer = rootCssVariables.getInitializer();

  if (!rootCssVariablesInitializer) {
    throw new Error("Root CSS Variables initializer is missing");
  }

  const rootCssVariablesObjectExpression = rootCssVariablesInitializer
    .asKindOrThrow(SyntaxKind.SatisfiesExpression)
    .getExpressionIfKindOrThrow(SyntaxKind.AsExpression)
    .getExpressionIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

  const values: CssVariablesValue = [];

  getNestObjectLiteralValue(rootCssVariablesObjectExpression, variableName, undefined, values);

  /* console.log("Values:", values); */

  return values;
};
