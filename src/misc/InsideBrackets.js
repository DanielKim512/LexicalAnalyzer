"use strict";
exports.__esModule = true;
function InsideBrackets(statement, startBracket, endBracket) {
    var bracketCounter = 1;
    var currIndex = 1;
    while (bracketCounter > 0) {
        if (currIndex >= statement.length)
            throw new Error("Invalid Statement");
        if (statement.charAt(currIndex) == startBracket)
            bracketCounter++;
        else if (statement.charAt(currIndex) == endBracket)
            bracketCounter--;
        currIndex++;
    }
    return {
        insideStatement: statement.substring(1, currIndex - 1).trim(),
        restStatement: statement.substring(currIndex).trim()
    };
}
exports["default"] = InsideBrackets;
