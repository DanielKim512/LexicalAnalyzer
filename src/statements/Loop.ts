import BooleanEquation from "../misc/BooleanEquation";
import Statement from "../Statement";
import InsideBrackets from "../misc/InsideBrackets";
import Tokens from "../misc/Tokens";

export default function Loop(statement: string) {

  statement = statement.replace("repeat ", "").trim();

  const {
    inState: booleanEquation,
    outState: conditionStatement,
  } = InsideBrackets(
    statement,
    Tokens.left,
    Tokens.right
  );

  const { inState, outState } = InsideBrackets(
    conditionStatement.trim(),
    Tokens.blockOpen,
    Tokens.blockClose
  );

  while (true) {
    if (BooleanEquation(booleanEquation)) Statement(inState);
    else break;
  }

  Statement(outState);
}
