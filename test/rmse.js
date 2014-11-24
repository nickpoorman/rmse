var should = require('should');
var RMSE = require('../');

describe('RMSE', function() {

  it('should produce a valid RMSE score', function() {

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
});
