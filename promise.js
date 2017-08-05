var getRandomWithPromise = (error) => {
    return new Promise((resolve, reject) => {
        // setTimeOut simulate a delay to an asynchronous task
        // such as HTTP request
        setTimeout(function() {
            if(error) {
                // when error occured we reject our promise
                reject("some error occured"); return;
            }

            resolve(Math.floor(Math.random() * 100));
        }, 200);
    });
}

getRandomWithPromise()
    // the resolver function to run when the promise is resolved
    .then((result) => {
        console.log(`random number generated is ${result}`);
    })
    // the resolver function to run when the promis is rejected
    .catch((error) => {
        console.log(`something went wrong: ${error}`)
    });