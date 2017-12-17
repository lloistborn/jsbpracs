let Car = function() {
  this.numWheels = 4
  this.manufacturer = "BMW"
  this.make = "Model S"
}

Car.prototype = function() {
  let go = function() {
    console.log("go")
  }

  let stop = function() {
    console.log("stop")
  }

  return {
    pressBreakPedal: stop,
    pressGasPedal: go
  }
}()

let car = new Car()

car.pressBreakPedal()
car.pressGasPedal()
console.log(car.numWheels)
car.go()