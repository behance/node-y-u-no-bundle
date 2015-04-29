#!/usr/bin/env node

'use strict';

var findNotBundled = require('../');
var root = process.argv[2];
var config = process.argv[3];

try {
  var stragglers = findNotBundled(root, config, function(stragglers) {
    stragglers.forEach(function(straggler) {
      console.log(straggler);
    });
  });

} catch (e) {
  console.log(e);
}

