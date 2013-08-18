
// Wrapper (to ensure outer parts are conserved)

(function(){

  var testCase = TestCase;

  var somethingFunny = assertEquals;

  var ExampleTest = testCase("ExampleTest", {
    setUp: function() {
      this.somethingTrue = true;
    },
    tearDown: function() {
      this.somethingLeftOver = null;
    },
    test_assertTrue: function () {
      assertTrue("Really obvious", this.somethingTrue);
    },
    test_assertSame: function () {
      assertSame("Really obvious", true, true);
    },
    test_assertEquals: function () {
      assertEquals("Really obvious", true, true);
    },
    test_somethingFunnyAssertEquals: function () {
      somethingFunny("Really obvious", true, true);
      this.somethingLeftOver = true;
    },
    test_assertNull: function () {
      assertNull(this.somethingLeftOver);
    }
  });

}());