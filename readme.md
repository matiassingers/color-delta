# color-delta [![Build Status](http://img.shields.io/travis/matiassingers/color-delta.svg?style=flat-square)](https://travis-ci.org/matiassingers/color-delta) [![Dependency Status](http://img.shields.io/gemnasium/matiassingers/color-delta.svg?style=flat-square)](https://gemnasium.com/matiassingers/color-delta)
> calculate the diff between 2 colors

Accepts almost all types of color strings, see [TinyColor](https://github.com/bgrins/TinyColor#accepted-string-input) for more info.

Partially extracted from [Sass Colour Function Calculator](http://razorjam.github.io/sasscolourfunctioncalculator/).


## Install

```sh
$ npm install --save color-delta
```


## Usage

```js
var colorDelta = require('color-delta');

colorDelta('#BADA55', '#B0BCA7', 2)
// => { hue: 19.84, saturation: ... }
```


## CLI

```sh
$ npm install --global color-delta
```

```sh
$ color-delta --help

  calculate the diff between 2 colors

  Example
    color-delta #bada55 #b0bca7
    => {
         "hue": 19.849624060150404,
         "saturation": 0.5070282063269438,
         "lightness": -0.10196078431372546
       }
```


## API

#### Base

Type: `String`  

Base color to calculate difference from.

#### Target

Type: `String`  

Target color to calculate difference to.

#### Decimals

Type: `String`  
*optional*  

Fixed number of decimals in returned values.


## Related
- [`sass-color-calculator`](https://github.com/matiassingers/sass-color-calculator)


## License

MIT © [Matias Singers](http://mts.io)
