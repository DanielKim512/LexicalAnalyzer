import BooleanEquation from "../misc/BooleanEquation";
import InsideBrackets from "../misc/InsideBrackets";
import Tokens from "../misc/Tokens";
import Statement from "../Statement";

export default function Condition(statement: string) {
  statement = statement.replace("cond ", "");

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
    Tokens.blockOpen
  );

  if (BooleanEquation(booleanEquation)) Statement(inState);

  Statement(outState);
}
