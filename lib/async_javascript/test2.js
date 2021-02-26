// this test takes a look at .then and promises

function test2() {

}

test2.prototype.run = function(num)
{
    var result = promiseFunction(num);
    return result;
}

var myfunction = async function(i)
{
    return new Promise(function(resolve)
    {
        setTimeout(function() {
            i += 5;
            resolve(i);
        }, 10);
    });
    
}

var promiseFunction = async function(number)
{
    var result = Promise.resolve(myfunction(number))
    .then(function(value) { 
        value += 17;
        return value;
    });

    return result;
}

module.exports = test2;
