// Wrapper (to ensure outer parts are conserved)

(function() {





  describe("Example", function() {
    beforeEach(function() {
      this.somethingTrue = true;
    });

    afterEach(function() {
      this.somethingLeftOver = null;
    });

    describe("assertTrue", function() {
      it("should pass tests", function() {
        assertTrue("Really obvious", this.somethingTrue);
      });

    });
    describe("assertSame", function() {
      it("should pass tests", function() {
        assertSame("Really obvious", true, true);
      });

    });
    describe("assertEquals", function() {
      it("should pass tests", function() {
        expect(true).to.eql(true);
      });

    });
    describe("somethingFunnyAssertEquals", function() {
      it("should pass tests", function() {
        expect(true).to.eql(true);
        this.somethingLeftOver = true;
      });

    });
    describe("assertNull", function() {
      it("should pass tests", function() {
        expect(this.somethingLeftOver).to.equal(null);
      });

    });

  });


}());