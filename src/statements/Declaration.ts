import stack from "../stack";
import Statement from "../Statement";

export default function Declaration(statement: string) {
  const regexMatch = statement.match(/([^;]+);(.*)/)!;

  const [_, declarationStatement, outState] = regexMatch;

  let [type, variable] = declarationStatement.split(" ");

  type = type.trim();
  variable = variable.trim();

  if (stack[variable] != undefined) {
    throw new Error(`Error: ${variable} already exists`);
  }

  stack[variable] = [type, undefined];
  Statement(outState.trim());
}
