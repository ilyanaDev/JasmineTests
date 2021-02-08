describe("test1", function() {
    var test1 = require("../../lib/async_javascript/test1");
    var myTest1 = new test1();
    var addToMessage = function(message, addition) {return message + "\n" + addition};
    var expectedMessage = "start of message\nrunning anonymous async function\nchanged value of paymentMethod\ndone!\ninitial value\npaymentmethod: success\ndone with async function";

// last two lines aren't being added to message - why?

    it("should result in expected message", async function() {

        var paymentMethod = "initial value";
        var actualMessage = "start of message";

        (async () => {
            actualMessage = addToMessage(actualMessage, "running anonymous async function");
            await myTest1.createPayment()
                .then((result) => paymentMethod = result)
                .then(actualMessage = addToMessage(actualMessage, "changed value of paymentMethod"));

            actualMessage = addToMessage(actualMessage, "paymentmethod: " + paymentMethod);
        })()
            .then(() => actualMessage = addToMessage(actualMessage, "done with async function"))
            .finally(() => {
                expect(actualMessage).toEqual(expectedMessage);
            });


        actualMessage = addToMessage(actualMessage, "done!");
        actualMessage = addToMessage(actualMessage, paymentMethod);


    });
});