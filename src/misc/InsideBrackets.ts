export default function InsideBrackets(
  statement: string,
  startBracket: string,
  endBracket: string
) {
  let counter = 1;
  let curr = 1;

  while (counter > 0) {
    if (curr >= statement.length) throw new Error("Invalid Statement");

    if (statement.charAt(curr) == startBracket) {
      counter = counter + 1;
    } else if (statement.charAt(curr) == endBracket) {
      counter = counter - 1;
    }

    curr = curr + 1;
  }

  return {
    inState: statement.substring(1, curr- 1).trim(),
    outState: statement.substring(curr).trim(),
  };
}
