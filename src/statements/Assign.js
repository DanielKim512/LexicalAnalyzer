"use strict";
exports.__esModule = true;
var stack_1 = require("../stack");
var Tokens_1 = require("../misc/Tokens");
var Statement_1 = require("../Statement");
var Expression_1 = require("../misc/Expression");
function Assign(statement) {
    var regexMatch = statement.match(/([^;]+);(.*)/);
    var _ = regexMatch[0], assignStatement = regexMatch[1], restStatement = regexMatch[2];
    // a = 10
    var _a = assignStatement.split(Tokens_1["default"].ASSIGN), variable = _a[0], expression = _a[1];
    variable = variable.trim();
    expression = expression.trim();
    // run the expression function to simplify the expression
    // const result = simplifyExpression(expression)
    stack_1["default"][variable][1] = (0, Expression_1["default"])(expression); // result
    (0, Statement_1["default"])(restStatement.trim());
}
exports["default"] = Assign;
