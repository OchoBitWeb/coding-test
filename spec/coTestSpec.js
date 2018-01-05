const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

  it("should run the test suite", function() {
    const coTest = new CarInsurance([ new Product("Medium Coverage", 10, 20) ]);
    const products = coTest.updatePrice();
    expect(products[0].name).equal("Medium Coverage");
  });

});
