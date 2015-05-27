'use strict';

var tinycolor = require('tinycolor2');
var map = require('lodash.mapvalues');

module.exports = function(base, target, decimals) {
  base = tinycolor(base).toHsl();
  target = new tinycolor(target).toHsl();

  var diff = {
    hue: -(base.h - target.h),
    saturation: base.s - target.s,
    lightness: base.l - target.l
  };

  return map(diff, function(value) {
    if (decimals > 0) {
      return value.toFixed(decimals);
    }

    return value;
  });
};
