### y u no bundle? [![npm](http://img.shields.io/npm/v/y-u-no-bundle.svg)](https://npmjs.org/package/y-u-no-bundle) [![npm](http://img.shields.io/npm/dm/y-u-no-bundle.svg)](https://npmjs.org/package/y-u-no-bundle)

> Get a list of driver scripts in your codebase that aren't actually being built/bundled

`npm install -g y-u-no-bundle`

### Usage

```js
var findDriversNotBundled = require('y-u-no-bundle');
var jsRoot = 'path/to/my/javascripts/';
var requireConfig = '/path/to/my/requirejs/build/config/config.json';

findDriversNotBundled(jsRoot, requireConfig, function(stragglers) {
  stragglers.forEach(function(straggler) {
    console.log('sad file: ' + straggler);
  });
});
```

Or via the shell:

```
y-u-no-bundle my/js/root my/build/config.json
```
