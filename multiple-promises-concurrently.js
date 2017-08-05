var getRandomWithPromise = (error) => {
    return new Promise((resolve, reject) => {
        // setTimeOut simulate a delay to an asynchronous task
        // such as HTTP request
        setTimeout(function() {
            if(error) {
                // when error occured we reject our promise
                reject("some error occured"); return
            }

            resolve(Math.floor(Math.random() * 100))
        }, 200);
    })
}

// concurrent
(async function() {
    // request and save the promise
    var aPromise = getRandomWithPromise()
    var bPromise = getRandomWithPromise()

    // we dont wait for the first finish to request the second
    // just wait for all promise fulfilled
    var a = await aPromise
    var b = await bPromise

    console.log(`random number generated concurrently ${a} & ${b}`)
})()