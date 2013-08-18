module.exports = function (sourceCode, options) {
  var falafel        = require("falafel");
  var grunt          = require("grunt");
  var removeAlias    = require("./lib/remove-alias");
  var replaceAsserts = require("./lib/replace-asserts");
  var beautify       = require("js-beautify").js_beautify;

  var _ = grunt.util._;

  _.defaults(options, {
    itMessage: ""
  });

  function wrap(source) {
    return "function () {\n" + source + "}";
  }

  function describe(name, func) {
    name = name.replace(/(Test|test_)/, "");
    return "describe(\"" + name + "\", " + func + ");\n\n";
  }

  function it(name, func) {
    name = name.replace(/(Test|test_)/, "");
    return "it(\"" + name + "\", " + func + ");\n\n";
  }

  sourceCode = removeAlias(["TestCase"], sourceCode);
  sourceCode = replaceAsserts(sourceCode);

  var syntax = falafel(sourceCode, function (node) {

    // Only throw errors if node.callee.name exists

    var catchMe = true;

    try {
      if (node.callee.name === "TestCase") {
        catchMe = false;
        var name = node.arguments[0].value;
        var spec = node.arguments[1];

        var output = "";
        _.each(spec.properties, function (keyNode) {
          var name = keyNode.key.name;
          var source = keyNode.value.source();
          if (name === "tearDown") { 
            output += "afterEach(" + source + ");\n\n";
          } else if (name === "setUp") {
            output += "beforeEach(" + source + ");\n\n";
          } else {
            output += describe(name, wrap(it(options.itMessage, source)));
          }
        });

        output = describe(name, "function () {\n" + output + "\n}"); 

        node.parent.parent.update(output);

      }
    } catch (e) {
      if (!catchMe) {
        throw(e);
        catchMe = true;
      }
    }

  });

  return beautify(syntax.toString(), { indent_size: 2 });

}