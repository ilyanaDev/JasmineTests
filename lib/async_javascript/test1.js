function test1() {

}

async function myfunction() {
    // console.log('Inside of myfunction');
    return "success";
  }

async function createPayment () {
    return await myfunction();
}



test1.prototype.Test1 = async function() {
    var paymentMethod = "initial value";
    var message = "start of message";

    function addToMessage(addition) {
        message += "\n" + addition;
    }

    (async () => {
        addToMessage("running anonymous async function");
        await createPayment()
            .then((result) => paymentMethod = result)
            .then(addToMessage("changed value of paymentMethod"));

        addToMessage("paymentmethod: " + paymentMethod);
    })()
        .then(() => addToMessage("done with async function"));


    addToMessage("done!");
    addToMessage(paymentMethod);

    return message;
}

module.exports = test1;