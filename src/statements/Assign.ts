import stack from "../stack";
import Tokens from "../misc/Tokens";
import Statement from "../Statement";
import Expression from "../misc/Expression";

export default function Assign(statement: string) {
  const regexMatch = statement.match(/([^;]+);(.*)/)!;

  const [_, assignStatement, outState] = regexMatch;

  let [variable, exp] = assignStatement.split(Tokens.assign);

  variable = variable.trim();
  exp = exp.trim();
  stack[variable][1] = Expression(exp); 
  Statement(outState.trim());
}
