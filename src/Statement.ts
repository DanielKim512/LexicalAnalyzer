import stack from "./stack";
import DataType from "./misc/DataTypes";
import Assign from "./statements/Assign";
import Tokens from "./misc/Tokens";
import Declaration from "./statements/Declaration";
import Condition from "./statements/Condition";
import Loop from "./statements/Loop";

export default function Statement(statement: string) {
  statement = statement.trim();

  if (!statement) return;
  const firstWordRegex = statement.match(/^[a-zA-Z]* /g);

  if (!firstWordRegex) throw new Error("Invalid syntax");

  const firstWord = firstWordRegex[0].trim();

  if (DataType.has(firstWord)) {
    Declaration(statement);
  } else if (firstWord == Tokens.repeat) {
    Loop(statement);
  } else if (firstWord == Tokens.cond) {
    Condition(statement);
  } else if (stack[firstWord] != undefined) {
    Assign(statement);
  } else {
    throw new Error(`Error: ${firstWord} isn't defined`);
  }
}
