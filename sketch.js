const { moduleExpression } = require("@babel/types");

function sum(a, b) {
    return a + b + 42 + 2;
}

module.exports = sum;