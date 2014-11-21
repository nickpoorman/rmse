/**
 * util functions for RMSE calculations
 */

var RMSE = {};

module.exports = RMSE;

/**
 * compute the error
 */
RMSE.error = function(val) {
  return val.actual - val.predicted;
}

/**
 * compute the squared error
 */
RMSE.squaredError = function(vals) {
  var errors = [];
  for (var i = vals.length - 1; i >= 0; i--) {
    errors.push(Math.pow(RMSE.error(vals[i]), 2));
  };
  return errors;
}

/**
 * compute the mean
 */
RMSE.mean = function(vals) {
  var total = 0;
  for (var i = vals.length - 1; i >= 0; i--) {
    total += vals[i];
  }
  return total / vals.length;
}

/**
 * compute the mean square error
 */
RMSE.mse = function(vals) {
  return RMSE.mean(RMSE.squaredError(vals));
}

/**
 * compute the root mean squared error
 * @param  {Array {actual: number, predicted: number}, ...)} vals
 *                   An array of objects.
 *                   ie. {actual: number1, predicted: number2} where number1 is the target value and number2 is the actual value.
 * @return {number}  The root mean square error
 */
RMSE.rmse = function(vals) {
  return Math.sqrt(RMSE.mse(vals));
}
