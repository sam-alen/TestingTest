const { moduleExpression } = require("@babel/types");

function sum(a, b) {
    return a + b + 42;
}

module.exports = sum;