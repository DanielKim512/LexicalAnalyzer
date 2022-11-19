"use strict";
exports.__esModule = true;
var stack_1 = require("../stack");
var Tokens_1 = require("./Tokens");
var ADD = Tokens_1["default"].ADD, SUB = Tokens_1["default"].SUB, MUL = Tokens_1["default"].MUL, DIV = Tokens_1["default"].DIV, PARENTHESISCLOSE = Tokens_1["default"].PARENTHESISCLOSE, PARENTHESISOPEN = Tokens_1["default"].PARENTHESISOPEN;
var BinaryNode = /** @class */ (function () {
    function BinaryNode(value) {
        if (value === void 0) { value = ""; }
        this.value = "";
        this.value = value;
        this.left;
        this.right;
    }
    return BinaryNode;
}());
var LexicalAnalyzer = /** @class */ (function () {
    function LexicalAnalyzer(expression) {
        var _this = this;
        this.getEquation = function () {
            return _this.value;
        };
        this.getIndexOfPairBracket = function (statement, startBracket, endBracket, startIndex) {
            var bracketCounter = 1;
            var currIndex = startIndex + 1;
            while (bracketCounter > 0) {
                if (currIndex >= statement.length)
                    throw new Error("Invalid Statement");
                if (statement.charAt(currIndex) == startBracket)
                    bracketCounter++;
                else if (statement.charAt(currIndex) == endBracket)
                    bracketCounter--;
                currIndex++;
            }
            return currIndex;
        };
        this.inParenthesis = function (expression) {
            if (expression[0] != PARENTHESISOPEN)
                return false;
            var i = _this.getIndexOfPairBracket(expression, PARENTHESISOPEN, PARENTHESISCLOSE, 0);
            return i >= expression.length;
        };
        this.makeTree = function (expression, node) {
            expression = expression.trim();
            if (_this.inParenthesis(expression))
                expression = expression.substring(1, expression.length - 1);
            if (!expression)
                throw new Error("Invalid Expression");
            if (!isNaN(+expression))
                return (node.value = +expression);
            var plusIndex;
            var subIndex;
            var multiplicationIndex;
            var divisionIndex;
            var tempExp = expression;
            for (var i = 0; i < tempExp.length; i++) {
                if (tempExp[i] == PARENTHESISOPEN) {
                    i = _this.getIndexOfPairBracket(tempExp, PARENTHESISOPEN, PARENTHESISCLOSE, i);
                }
                else if (tempExp.substring(i - 1, i + 2) == " ".concat(ADD, " "))
                    plusIndex = i;
                else if (tempExp.substring(i - 1, i + 2) == " ".concat(SUB, " "))
                    subIndex = i;
                else if (tempExp.substring(i - 1, i + 2) == " ".concat(MUL, " "))
                    multiplicationIndex = i;
                else if (tempExp.substring(i - 1, i + 2) == " ".concat(DIV, " "))
                    divisionIndex = i;
            }
            if (plusIndex || subIndex || multiplicationIndex || divisionIndex) {
                node.left = new BinaryNode();
                node.right = new BinaryNode();
            }
            else {
                if (stack_1["default"][expression] == undefined || stack_1["default"][expression][1] == undefined) {
                    throw new Error("Variable doesn't exist");
                }
                if (stack_1["default"][expression] != undefined)
                    node.value = stack_1["default"][expression][1];
                return;
            }
            var operatorIndices = [
                [multiplicationIndex, MUL],
                [divisionIndex, DIV],
                [plusIndex, ADD],
                [subIndex, SUB],
            ];
            for (var i = 0; i < operatorIndices.length; i++) {
                var _a = operatorIndices[i], index = _a[0], operator = _a[1];
                if (!index)
                    continue;
                node.value = operator;
                _this.makeTree(expression.substring(0, index).trim(), node.left);
                _this.makeTree(expression.substring(index + 2).trim(), node.right);
                break;
            }
        };
        this.equateTree = function (node) {
            if (!node)
                return 0;
            if (typeof node.value == "number")
                return node.value;
            switch (node.value) {
                case "+":
                    return _this.equateTree(node.left) + _this.equateTree(node.right);
                case "-":
                    return _this.equateTree(node.left) - _this.equateTree(node.right);
                case "*":
                    return _this.equateTree(node.left) * _this.equateTree(node.right);
                default:
                    return _this.equateTree(node.left) / _this.equateTree(node.right);
            }
        };
        var root = new BinaryNode();
        this.makeTree(expression, root);
        this.root = root;
        this.value = this.equateTree(root);
    }
    return LexicalAnalyzer;
}());
exports["default"] = LexicalAnalyzer;
