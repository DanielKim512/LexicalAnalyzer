"use strict";
exports.__esModule = true;
var BooleanEquation_1 = require("../misc/BooleanEquation");
var Statement_1 = require("../Statement");
var InsideBrackets_1 = require("../misc/InsideBrackets");
var Tokens_1 = require("../misc/Tokens");
function Loop(statement) {
    // repeat () {}
    statement = statement.replace("repeat ", "").trim();
    var _a = (0, InsideBrackets_1["default"])(statement, Tokens_1["default"].PARENTHESISOPEN, Tokens_1["default"].PARENTHESISCLOSE), booleanEquation = _a.insideStatement, conditionStatement = _a.restStatement;
    var _b = (0, InsideBrackets_1["default"])(conditionStatement.trim(), Tokens_1["default"].CODEBLOCKOPEN, Tokens_1["default"].CODEBLOCKCLOSE), insideStatement = _b.insideStatement, restStatement = _b.restStatement;
    while (true) {
        if ((0, BooleanEquation_1["default"])(booleanEquation))
            (0, Statement_1["default"])(insideStatement);
        else
            break;
    }
    (0, Statement_1["default"])(restStatement);
}
exports["default"] = Loop;
