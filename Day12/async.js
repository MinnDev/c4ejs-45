let value = prompt("Please input something?");

//Promise
function myPromise(value) {
    return new Promise(function(resolve, reject) {
        if (isNaN(value) == true) 
            resolve(value);
        else
            reject("Input is not a string!");
    })
}

myPromise(value)
.then((value) => {
    console.log(value);
})
.catch((err) => {
    console.log(err);
});

/********************************************************************************************/

//Async function
async function asyncCall() {
    let result = await myPromise(value);
    console.log(result);
};

asyncCall()
.catch((err) => {
    console.log(err);
});