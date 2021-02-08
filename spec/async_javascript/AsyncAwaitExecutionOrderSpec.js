describe("test1", function() {
    var test1 = require("../../lib/async_javascript/test1");
    var myTest1 = new test1();
    var expectedMessage = "start of message\nrunning anonymous async function\nchanged value of paymentMethod\ndone!\ninitial value\npaymentmethod: success\ndone with async function";
    
// last two lines aren't being added to message - why?

    it("should result in expected message", async function() {
        var actualMessage = await myTest1.Test1();

        expect(actualMessage).toEqual(expectedMessage);
    });
});