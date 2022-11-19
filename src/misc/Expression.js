"use strict";
exports.__esModule = true;
var LexicalAnalyzer_1 = require("./LexicalAnalyzer");
function Expression(expression) {
    var lexicalAnalyzer = new LexicalAnalyzer_1["default"](expression.trim());
    return lexicalAnalyzer.getEquation();
}
exports["default"] = Expression;
