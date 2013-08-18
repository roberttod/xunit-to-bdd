module.exports = function (sourceCode) {
  var grunt       = require("grunt");
  var falafel     = require("falafel");
  var removeAlias = require("./remove-alias");

  var _ = grunt.util._;

  var syntax = removeAlias(["assertEquals"], sourceCode);

  var assertMap = [
    {
      regex: /assertSame/,
      convert: function (left, right, match) {
        return "expect(" + left + ").to.equal(" + right + ")";
      },
      hasLeft: true
    },
    {
      regex: /assertEquals/,
      convert: function (left, right, match) {
        return "expect(" + left + ").to.eql(" + right + ")";
      },
      hasLeft: true
    },
    {
      regex: /assertNotEquals/,
      convert: function (left, right, match) {
        return "expect(" + left + ").to.not.eql(" + right + ")";
      },
      hasLeft: true
    },
    {
      regex: /assert(True|False|Null)/,
      convert: function (right, match) {
        return "expect(" + right + ").to.equal(" + match.toLowerCase() + ")";
      },
      hasLeft: false
    },
    {
      regex: /assertNot(True|False|Null)/,
      convert: function (right, match) {
        return "expect(" + right + ").to.not.equal(" + match.toLowerCase() + ")";
      },
      hasLeft: false
    },
    {
      regex: /assertException/,
      convert: function (right, match) {
        return "expect(" + right + ").to.throwException()";
      },
      hasLeft: false
    },
    {
      regex: /assertNoException/,
      convert: function (right, match) {
        return "expect(" + right + ").to.not.throwException()";
      },
      hasLeft: false
    },
    {
      regex: /expectAsserts/,
      convert: function (right, match) {
        return "";
      },
      hasLeft: false
    }
  ];


  syntax = falafel(syntax, function (node) {


    try {
      _.forEach(assertMap, function (assertion) {
        var match = node.callee.name.match(assertion.regex);
        var message;
        if (match) {

          if (assertion.hasLeft && node.arguments.length === 3 || !assertion.hasLeft && node.arguments.length === 2) {
            message = node.arguments.shift().value;
          }

          if (assertion.hasLeft) {
            node.update(assertion.convert(node.arguments[0].source(), node.arguments[1].source(), match[1]));
          } else {
            node.update(assertion.convert(node.arguments[0].source(), match[1]));
          }
          
        }
      });
    } catch (e) {

    }

  });

  return syntax.toString();

}