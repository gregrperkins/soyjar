var pathModule = require('path');
var paths = {}

var relative = pathModule.resolve.bind(pathModule, __dirname);

paths.compiler = relative('vendor', 'SoyToJsSrcCompiler.jar');
paths.googJs = relative('vendor', 'soyutils_usegoog.js');
paths.js = relative('vendor', 'soyutils.js');

module.exports = paths;
