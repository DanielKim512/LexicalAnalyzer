"use strict";
exports.__esModule = true;
var BooleanEquation_1 = require("../misc/BooleanEquation");
var InsideBrackets_1 = require("../misc/InsideBrackets");
var Tokens_1 = require("../misc/Tokens");
var Statement_1 = require("../Statement");
function Condition(statement) {
    statement = statement.replace("cond ", "");
    var _a = (0, InsideBrackets_1["default"])(statement, Tokens_1["default"].PARENTHESISOPEN, Tokens_1["default"].PARENTHESISCLOSE), booleanEquation = _a.insideStatement, conditionStatement = _a.restStatement;
    var _b = (0, InsideBrackets_1["default"])(conditionStatement.trim(), Tokens_1["default"].CODEBLOCKOPEN, Tokens_1["default"].CODEBLOCKCLOSE), insideStatement = _b.insideStatement, restStatement = _b.restStatement;
    if ((0, BooleanEquation_1["default"])(booleanEquation))
        (0, Statement_1["default"])(insideStatement);
    (0, Statement_1["default"])(restStatement);
}
exports["default"] = Condition;
