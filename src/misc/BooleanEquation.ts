import Expression from "./Expression";
import Tokens from "./Tokens";

export default function BooleanEquation(equation: string) {
  
  const {greater, less, greaterE, lessE, equal, notE } = Tokens;

  const operator = [greater, less, greaterE, lessE, equal, notE];

  for (let i = 0; i < operator.length; i++) {
    const hasToken = equation.includes(` ${operator[i]} `);

    if (!hasToken) {
      continue;
    }

    const [expOne, expTwo] = equation.split(
      ` ${operator[i]} `
    );

    const valOne = Expression(expOne);
    const valTwo = Expression(expTwo);
    const token = operator[i];

    if (token == greater) {
      return valOne > valTwo;
    }

    if (token == less) {
      return valOne < valTwo;
    }

    if (token == greaterE) {
      return valOne >= valTwo;
    }

    if (token == lessE) {
      return valOne <= valTwo;
    }

    if (token == equal) {
      return valOne == valTwo;
    }

    if (token == notE) {
      return valOne != valTwo;
    }
  }

  throw new Error("Error: Invalid Boolean expression");
}
