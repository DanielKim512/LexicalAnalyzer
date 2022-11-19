import stack from "../stack";
import Tokens from "./Tokens";

const { plus, minus, multiply, divide, right, left } = Tokens;

class BinaryNode {

  left: BinaryNode | undefined;
  right: BinaryNode | undefined;
  value: string | number = "";

  constructor(value: string = "") {
    this.value = value;
    this.left;
    this.right;
  }
}

export default class LexicalAnalyzer {
  value;
  root;

  constructor(expression: string) {
    const root = new BinaryNode();
    this.makeTree(expression, root);

    this.root = root;
    this.value = this.equateTree(root);
  }

  getEquation = () => {
    return this.value;
  };

  getIndexOfPairBracket = (
    statement: string,
    startB: string,
    endB: string,
    start: number
  ) => {
    let counter = 1;
    let curr = start + 1;

    while (counter > 0) {
      if (curr >= statement.length) {
        throw new Error("Error: Invalid Statement");
      }

      if (statement.charAt(curr) == startB) {
         counter = counter + 1;
      } else if (statement.charAt(curr) == endB) {
        counter = counter - 1;
      }
      curr = curr + 1;
    }

    return curr;
  };

  inParenthesis = (expression: string) => {
    if (expression[0] != left) return false;

    const i = this.getIndexOfPairBracket(
      expression,
      left,
      right,
      0
    );

    return i >= expression.length;
  };

  makeTree = (expression: string, node: BinaryNode) => {
    expression = expression.trim();

    if (this.inParenthesis(expression)) {
      expression = expression.substring(1, expression.length - 1);
    }

    if (!expression) {
      throw new Error("Error: Invalid Expression");
    }

    if (!isNaN(+expression)) {
      return (node.value = +expression);
    }

    let plusI;
    let minusI;
    let mulI;
    let divI;

    let tempExp = expression;

    for (let i = 0; i < tempExp.length; i++) {
      if (tempExp[i] == left) {
        i = this.getIndexOfPairBracket(tempExp, left, right, i);
      } else if (tempExp.substring(i - 1, i + 2) == ` ${plus} `) {
        plusI = i;
      } else if (tempExp.substring(i - 1, i + 2) == ` ${minus} `) {
        minusI = i;
      } else if (tempExp.substring(i - 1, i + 2) == ` ${multiply} `) {
        mulI = i;
      } else if (tempExp.substring(i - 1, i + 2) == ` ${divide} `) {
        divI = i;
      }
    }

    if (plusI || minusI || mulI || divI) {
      node.left = new BinaryNode();
      node.right = new BinaryNode();
    } else {
      if (stack[expression] == undefined || stack[expression][1] == undefined) {
        throw new Error("Error: Variable doesn't exist");
      }

      if (stack[expression] != undefined) {
        node.value = stack[expression][1]!;
      }

      return;
    }

    const operatorIndices: Array<[number | undefined, string]> = [
      [plusI, plus],
      [minusI, minus],
      [mulI, multiply],
      [divI, divide]
    ];

    for (let i = 0; i < operatorIndices.length; i++) {
      const [index, operator] = operatorIndices[i];

      if (!index) {
        continue;
      }

      node.value = operator;
      this.makeTree(expression.substring(0, index).trim(), node.left!);
      this.makeTree(expression.substring(index + 2).trim(), node.right!);

      break;
    }
  };

  equateTree = (node: BinaryNode | undefined): number => {
    if (!node) {
      return 0;
    }

    if (typeof node.value == "number") {
      return node.value;
    }
    
    switch (node.value) {
      case "+":
        return this.equateTree(node.left) + this.equateTree(node.right);
      case "-":
        return this.equateTree(node.left) - this.equateTree(node.right);
      case "*":
        return this.equateTree(node.left) * this.equateTree(node.right);
      default:
        return this.equateTree(node.left) / this.equateTree(node.right);
    }
  };
}
