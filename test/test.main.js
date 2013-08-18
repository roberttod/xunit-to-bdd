var falafel        = require("falafel");
var grunt          = require("grunt");

var getAST         = require("../lib/get-ast");
var xUnitToBDD     = require("../xunit-to-bdd");


var testFile = grunt.file.read("./test/example-test.xunit.js");

// Print full AST to test/ast.js
grunt.file.write("test/ast.js", getAST(testFile));

// Convert to BDD
testFile = xUnitToBDD(testFile, {
  itMessage: "should pass tests"
});

// Save to test/result.bdd.js
grunt.file.write("test/result.bdd.js", testFile);




