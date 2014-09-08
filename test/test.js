var chai = require('chai');
var expect = chai.expect;

var counterTest = require('../counter.js')

describe('Counter Object', function() {
  var counterObject = new counterTest();

  it('Should start counting from zero', function() {
    expect(counterObject.getValue()).to.equal(0);
  });

  it('Should increment count by one', function() {
    expect(counterObject.increment()).to.equal(1);
  });

  it('Should return the current value', function() {
    counterObject.increment();
    expect(counterObject.getValue()).to.equal(2);
  });
});
