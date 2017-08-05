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

// using Promise.all to run promise concurrently
// advantages, if error happened, it will not wait other promises fulfilled, it will rejects imidiately
(async function() {
    var [a, b] = await Promise.all([
        getRandomWithPromise(),
        getRandomWithPromise()
    ])

    console.log(`random number generated concurrently using Promise.all ${a} & ${b}`)
})()