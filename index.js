var getModuleNames = require('get-modules-to-build');
var getDriverScripts = require('amd-driver-scripts');

/**
 * Computes the set difference between two arrays
 * @param  {Array} a
 * @param  {Array} b
 * @return {Array} A list of values from a that are not in b
 */
function difference(a, b) {
  // Naive n^2
  return a.filter(function(elem) {
    return b.indexOf(elem) === -1;
  });
}

/**
 * Gets the list of driver scripts within root that are not part of the requirejs config
 * @param  {String} root   - The base directory for your javascript files
 * @param  {String} config - The path for your requirejs config
 * @param  {Function} cb - (String[]) -> null
 */
module.exports = function(root, config, cb) {
  if (!root) {
    throw new Error('root not given');
  }

  if (!config) {
    throw new Error('config not given');
  }

  var moduleNames = getModuleNames(config);

  getDriverScripts(root, function(drivers) {
    var strippedDriverScripts = drivers.map(function(scriptName) {
      var token = scriptName
                  .replace(new RegExp(root + '\/?'), '')
                  .replace('.js', '');
      return token || scriptName;
    });

    var notBundled = difference(strippedDriverScripts, moduleNames);

    if (cb) { cb(notBundled); }
  });
};
