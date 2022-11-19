"use strict";
exports.__esModule = true;
var Expression_1 = require("./Expression");
var Tokens_1 = require("./Tokens");
function BooleanEquation(equation) {
    var GT = Tokens_1["default"].GT, LT = Tokens_1["default"].LT, GTE = Tokens_1["default"].GTE, LTE = Tokens_1["default"].LTE, EQ = Tokens_1["default"].EQ, NE = Tokens_1["default"].NE;
    var equationOperators = [GT, LT, GTE, LTE, EQ, NE];
    for (var i = 0; i < equationOperators.length; i++) {
        var hasToken = equation.includes(" ".concat(equationOperators[i], " "));
        if (!hasToken)
            continue;
        var _a = equation.split(" ".concat(equationOperators[i], " ")), expressionOne = _a[0], expressionTwo = _a[1];
        var valueOne = (0, Expression_1["default"])(expressionOne);
        var valueTwo = (0, Expression_1["default"])(expressionTwo);
        var token = equationOperators[i];
        if (token == LT)
            return valueOne < valueTwo;
        if (token == LTE)
            return valueOne <= valueTwo;
        if (token == GT)
            return valueOne > valueTwo;
        if (token == GTE)
            return valueOne >= valueTwo;
        if (token == EQ)
            return valueOne == valueTwo;
        if (token == NE)
            return valueOne != valueTwo;
    }
    throw new Error("Invalid Boolean expression");
}
exports["default"] = BooleanEquation;
