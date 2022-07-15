let assert = require("assert");
let calc = require("./Calc");

describe("StringCalc Tests", () => {

    it("should return 0 for an empty string", () => {
        assert.equal(calc(""), 0);
    });

    it("should return the number for a single number", () => {
        assert.equal(calc("1"), 1);
    });

    it("should return the sum of comma delimited numbers", () => {
        assert.equal(calc("1,2"), 3);
    });

    it("should return sum of any number of comma delimeted numbers", () => {
        assert.equal(calc("1,2,3"), 6);
    });

    it("should return sum for newline and comma delimited numbers", () => {
        assert.equal(calc("1,2\n3"), 6);
    });

    it("should return sum for custom delimites", () => {
        assert.equal(calc("//;\n1;2;3"), 6);
    });

    it("should throw an error on negative numbers", () => {
        assert.throws(() => calc("-1,2,-3"), /negatives not allowed -1 -3/);
    });

    it("should ignore numbers larger than 1000", () => {
        assert.equal(calc("1001,2,3"), 5);
    });

    it("should return the sum for mutliple custom delimiters", () => {
        assert.equal(calc("//[*][$]\n1*2$3"), 6);
    });
})