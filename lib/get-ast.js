module.exports = function (syntax) {

  var falafel = require("falafel");
  var output;


  function stringify (thing) {
    var cache = [];
    return JSON.stringify(thing, function(key, value) {
      if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
          return;
        }
        cache.push(value);
      }
      return value;
    }, 2);
    cache = null;
  }


  falafel(syntax, function (node) {

    if (node.parent == null) {
      output = stringify(node);
    }

  });

  return output;

}