"use strict";
/**
 * Statement can have 4 options
 *
 * if - starts with keyword cond
 *
 * while - starts with keyword repeat
 *
 * assign - starts with a variable in the stack
 *
 * declaration - starts with either SHORT TALL GRADE VENTI
 *
 */

exports.__esModule = true;
var stack_1 = require("./stack");
var DataTypes_1 = require("./misc/DataTypes");
var Assign_1 = require("./statements/Assign");
var Tokens_1 = require("./misc/Tokens");
var Declaration_1 = require("./statements/Declaration");
var Condition_1 = require("./statements/Condition");
var Loop_1 = require("./statements/Loop");
function Statement(statement) {
    statement = statement.trim();
    if (!statement)
        return;
    var firstWordRegex = statement.match(/^[a-zA-Z]* /g);
    if (!firstWordRegex)
        throw new Error("Invalid syntax");
    var firstWord = firstWordRegex[0].trim();
    if (DataTypes_1["default"].has(firstWord)) {
        // declaration'
        (0, Declaration_1["default"])(statement);
    }
    else if (firstWord == Tokens_1["default"].REPEAT) {
        // while statement
        (0, Loop_1["default"])(statement);
    }
    else if (firstWord == Tokens_1["default"].COND) {
        // if statement
        (0, Condition_1["default"])(statement);
    }
    else if (stack_1["default"][firstWord] != undefined) {
        (0, Assign_1["default"])(statement);
        // is an assigny operator
    }
    else {
        // throw error
        throw new Error("".concat(firstWord, " isn't defined"));
    }
}
exports["default"] = Statement;
