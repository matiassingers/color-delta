'use strict';

var assert = require('assert');
var colorDelta = require('./');

describe('colorDelta', function(){
  it('should return object with diff', function() {
    assert.deepEqual(colorDelta('#bada55', '#b0bca7'), {
      hue: 19.849624060150404,
      saturation: 0.5070282063269438,
      lightness: -0.10196078431372546
    });

    assert.deepEqual(colorDelta('#ec008c', '#9f0962'), {
      hue: -0.006779661016935279,
      saturation: 0.1071428571428571,
      lightness: 0.13333333333333336
    });
  });

  it('should return object with diff to fixed decimals', function() {
    assert.deepEqual(colorDelta('#bada55', '#b0bca7', 2), {
      hue: 19.85,
      saturation: 0.51,
      lightness: -0.10
    });

    assert.deepEqual(colorDelta('#ec008c', '#9f0962', 2), {
      hue: -0.01,
      saturation: 0.11,
      lightness: 0.13
    });
  });

  it('should not do fixed decimals if passible a non-finite argument', function() {
    assert.deepEqual(colorDelta('#bada55', '#b0bca7', false), {
      hue: 19.849624060150404,
      saturation: 0.5070282063269438,
      lightness: -0.10196078431372546
    });

    assert.deepEqual(colorDelta('#ec008c', '#9f0962', -4), {
      hue: -0.006779661016935279,
      saturation: 0.1071428571428571,
      lightness: 0.13333333333333336
    });
  });
});
