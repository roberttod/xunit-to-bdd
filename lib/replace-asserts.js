module.exports = function (sourceCode) {
  var falafel = require("falafel");
  var removeAlias = require("./remove-alias");

  var syntax = removeAlias(["assertEquals"], sourceCode);

  var assertMap = {
    assert: {
      convert: function (type, source) {
        return "expect(" + source + ").to.equal(" + type + ")";
      },
      args: 2
    },
    assertLoose: {
      convert: function (type, source) {
        return "expect(" + source + ").to.eql(" + type + ")";
      },
      args: 2
    },
    assertException: {
      convert: function (source) {
        return "expect(" + source + ").to.throwException()";
      },
      args: 1
    },
    assertNot: {
      convert: function (type, source) {
        return "expect(" + source + ").to.not.equal(" + type + ")";
      },
      args: 2
    },
    assertLooseNot: {
      convert: function (type, source) {
        return "expect(" + source + ").to.not.eql(" + type + ")";
      },
      args: 2
    },
    assertNoException: {
      convert: function (source) {
        return "expect(" + source + ").to.not.throwException()";
      },
      args: 1
    },
  };


  syntax = falafel(syntax, function (node) {

    // Replace Asserts
    try {
      if (/assert(True|False|Null)/.test(node.callee.name)) {
        if (node.arguments.length === 1) {
          var type = node.callee.name.match(/(True|False|Null)/)[1].toLowerCase();
          node.update(assertMap.assert.convert(type, node.arguments[0].source()));
        }
      } else if (/assertEquals/.test(node.callee.name)) {
        if (node.arguments.length === 2) {
          var left = node.arguments[0].source();
          var right = node.arguments[1].source();
        } else if (node.arguments.length === 3) {
          var left = node.arguments[1].source();
          var right = node.arguments[2].source();
        }
        node.update(assertMap.assertLoose.convert(left, right));
      } else if (/assertSame/.test(node.callee.name)) {
        if (node.arguments.length === 2) {
          var left = node.arguments[0].source();
          var right = node.arguments[1].source();
          node.update(assertMap.assert.convert(left, right));
        }
      } else if (/assertNotNull/.test(node.callee.name)) {
        if (node.arguments.length === 1) {
          var type = "null";
          node.update(assertMap.assertNot.convert(type, node.arguments[0].source()));
        }
      } else if (/assertNotSame/.test(node.callee.name)) {
        if (node.arguments.length === 2) {
          var left = node.arguments[0].source();
          var right = node.arguments[1].source();
          node.update(assertMap.assertNot.convert(left, right));
        }
      } else if (/assertNotEquals/.test(node.callee.name)) {
        if (node.arguments.length === 2) {
          var left = node.arguments[0].source();
          var right = node.arguments[1].source();
          node.update(assertMap.assertLooseNot.convert(left, right));
        }
      } else if (/assertException/.test(node.callee.name)) {
        if (node.arguments.length === 1) {
          node.update(assertMap.assertException.convert(node.arguments[0].source()));
        }
      } else if (/assertNoException/.test(node.callee.name)) {
        if (node.arguments.length === 1) {
          node.update(assertMap.assertNoException.convert(node.arguments[0].source()));
        }
      } else if (node.callee.name === "expectAsserts") {
        node.update("");
      }
    } catch (e) {}

  });

  return syntax.toString();

}