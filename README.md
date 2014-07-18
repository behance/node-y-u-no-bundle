### Why you no bundle?

> Get a list of driver scripts in your codebase that aren't actually being built

`npm install -g why-you-no-bundle`

### Usage

```js
var findDriversNotBundled = require('why-you-no-bundle');
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
why-you-no-bundle my/js/root my/build/config.json
```
