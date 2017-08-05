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

const getRandomWithAsync = async() => {
    try {
        return await getRandomWithPromise();
    } catch(err) {
        return err;
    }
}

//run it using Imidiately Invoked Function Expression (IIFE)
(async function() {
    console.log(`random number generated is ${await getRandomWithAsync()}`);
})();