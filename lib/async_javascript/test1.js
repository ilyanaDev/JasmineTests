// This test illustrates the execution order of async functions using .then(), etc.

function test1() {

}

async function myfunction() {
    // console.log('Inside of myfunction');
    return "success";
  }

test1.prototype.createPayment = async function () {
    return await myfunction();
}

module.exports = test1;