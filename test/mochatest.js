var expect = require("chai").expect;
var funcs = require("../lib/calcfunctionsmocha.js");


describe("Calculator Functions", function() {
  describe("#add()", function() {
    it("should return the sum of two numbers", function() {
      var n1 = 2;
      var n2 = 3;
      var sum = funcs.add(n1, n2);


      expect(sum).to.equal(5);
    });
  });
});
