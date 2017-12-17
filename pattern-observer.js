let Subject = function() {
  let observers = []

  return {
    subcribeObserver: function(observer) {
      observers.push(observer)
    },
    unsubscribeObserver: function(observer) {
      let index = observers.indexOf(observer)

      if(index > -1) {
        observers.splice(index, 1)
      }
    },
    notifyObserver: function(observer) {
      let index = observers.indexOf(observer)

      if (index > -1) {
        observers[index].notify(index)
      }
    },
    notifyAllObserver: function() {
      observers.forEach((element, index) => {
        element.notify(index)
      })
    }
  }
}

let Observer = function() {
  return {
    notify: function(index) {
      console.log(`observer ${index} is notified`)
    }
  }
}

let subject = new Subject()

let observer1 = new Observer()

subject.subcribeObserver(observer1)
subject.notifyObserver(observer1)
subject.unsubscribeObserver(observer1)
subject.notifyAllObserver()