var expect = require("chai").expect;
var funcs = require('../calcfunctions.js');


describe("Calculator Functions", function() {
  describe("addition", function() {
    it("should return the sum of two numbers", function() {
      var num1 = 2;
      var num2 = 3;
      var sum = funcs.add(num1, num2);

      expect(sum).to.equal(5);
    });
  });
});
