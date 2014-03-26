var expect = require("chai").expect;
var funcs = require("../lib/calcfunctionsmocha.js");


describe("Calculator Functions", function() {
  describe("#add()", function() {
    it("should return the sum of two numbers", function() {
      var n1 = "2";
      var n2 = "3";
      var sum = funcs.add(n1, n2);

      expect(sum).to.equal("5.00000");
    });
  });

  describe("#subtract()", function() {
    it("should return the difference of two numbers", function() {
      var n1 = "2";
      var n2 = "3";
      var diff = funcs.subtract(n1, n2);

      expect(diff).to.equal("-1.00000");
    });
  });

  describe("#subtract()", function() {
    it("should return the product of two numbers", function() {
      var n1 = "2";
      var n2 = "3";
      var product = funcs.multiply(n1, n2);

      expect(product).to.equal("6.00000");
    });
  });

  describe("#divide()", function() {
    it("should return the quotient of two numbers", function() {
      var n1 = "6";
      var n2 = "3";
      var quotient = funcs.divide(n1, n2);

      expect(quotient).to.equal("2.00000");
    });
  });



});
