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

class Random {
    async getRandom() {
        return await getRandomWithPromise()
    }
}

(async function() {
    var random = new Random()
    console.log(`random number generated ${await random.getRandom()}`)
})();