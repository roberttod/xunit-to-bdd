xUnit to BDD
============
Convert xUnit style tests to BDD
--------------------------------

_Currently only working with very simple JSTestDrive tests to BDD compatible with the expect.js assertion library._

Example usage

```javascript
var xUnitToBDD = require("xunit-to-bdd");

var testFile = fs.readFileSync(".test-something.js", { encoding: "utf-8" });

// Convert to BDD
testFile = xUnitToBDD(testFile, {

  // All it calls will get this message (no easy way to convert these)
  // Default: ""
  itMessage: "should pass tests"
});

```


Known issues
------------

This is still in very early development, I wouldn't recommend using it yet.

* Async test case not yet supported
* Not all asserts are supported
* The message from asserts is currently discarded (perhaps these could bubble up to the nearest it)