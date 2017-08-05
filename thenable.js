var thenable = {
    then(resolve) {
        resolve(45);
    }
};

(async function() {
    // Because await wraps the followed expression into 'Promise.resolve'
    // it will work with any thenable object (i.e. an object with a .then() method).
    var random = await thenable;
   
    console.log(random);
})();