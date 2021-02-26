describe("test2", function() {
    var test2 = require("../../lib/async_javascript/test2");
    var myTest2 = new test2();
    var initialValue = 5;
    var expectedValue = 27;

    it("should result in expected value", async function() {

        var finalValue = myTest2.run(initialValue);

        setTimeout(function(){
            expect(expectedValue).toEqual(finalValue);
        }, 100);

    });
});