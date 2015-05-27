#!/usr/bin/env node
'use strict';

var pkg = require('./package.json');
var colorDelta = require('./');
var argv = process.argv.slice(2);

function help() {
  console.log([
    '',
      '  ' + pkg.description,
    '',
    '  Example',
    '    color-delta #bada55 #b0bca7',
    '    => {',
    '         "hue": 19.849624060150404,',
    '         "saturation": 0.5070282063269438,',
    '         "lightness": -0.10196078431372546',
    '       }'
  ].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
  help();
  return;
}

if (argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

console.log(JSON.stringify(colorDelta.apply(null, argv), null, 2));
