"use strict";
exports.__esModule = true;
var stack_1 = require("../stack");
var Statement_1 = require("../Statement");
function Declaration(statement) {
    var regexMatch = statement.match(/([^;]+);(.*)/);
    // short variableOne
    var _ = regexMatch[0], declarationStatement = regexMatch[1], restStatement = regexMatch[2];
    var _a = declarationStatement.split(" "), type = _a[0], variable = _a[1];
    type = type.trim();
    variable = variable.trim();
    if (stack_1["default"][variable] != undefined)
        throw new Error("".concat(variable, " already exists"));
    stack_1["default"][variable] = [type, undefined];
    (0, Statement_1["default"])(restStatement.trim());
}
exports["default"] = Declaration;
