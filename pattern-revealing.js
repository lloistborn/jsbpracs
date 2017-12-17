// The purpose is 
// to maintain encapsulation and reveal certain variables 
// and methods returned in an object literal

let Exposer = (function() {
  let privateVariable = 10

  let privateMethod = function() {
    console.log("inside private method")
    privateVariable++
  }

  let methodToExpose = function() {
    console.log("method to expose")
  }

  let otherMethodToExpose = function() {
    privateMethod()
  }

  return {
    first: methodToExpose,
    second: otherMethodToExpose
  }

})()

Exposer.first() // ok
Exposer.second() // ok
Exposer.methodToExpose() // error