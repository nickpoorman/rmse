var should = require('should');
var RMSE = require('../');

describe('RMSE', function() {

  it('should produce a valid mean square error', function() {

    var dataset = [{
      actual: 3,
      predicted: 2.5
    }, {
      actual: -0.5,
      predicted: 0.0
    }, {
      actual: 2,
      predicted: 2
    }, {
      actual: 7,
      predicted: 8
    }];

    RMSE.mse(dataset).should.equal(0.375);
  });

  it('should produce a valid root mean square error', function() {

    var dataset = [{
      actual: 0.5,
      predicted: 0
    }, {
      actual: 1,
      predicted: 2
    }, {
      actual: -1,
      predicted: -1
    }, {
      actual: 1,
      predicted: 2
    }, {
      actual: 7,
      predicted: 8
    }, {
      actual: -6,
      predicted: -5
    }];

    parseFloat(RMSE.mse(dataset).toPrecision(3)).should.equal(0.708);
  });

  it('should produce a valid root mean square error', function() {

    var dataset = [{
      actual: 0.5,
      predicted: 0
    }, {
      actual: 1,
      predicted: 2
    }, {
      actual: -1,
      predicted: -1
    }, {
      actual: 1,
      predicted: 2
    }, {
      actual: 7,
      predicted: 8
    }, {
      actual: -6,
      predicted: -5
    }];

    parseFloat(RMSE.rmse(dataset).toPrecision(3)).should.equal(0.842);
  });
});
