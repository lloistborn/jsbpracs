/***
The Click object represents the Subject. The clickHandler function is the subscribing Observer. This handler subscribes, unsubscribes, and then subscribes itself while events are firing. It gets notified only of events #1 and #3.

Notice that the fire method accepts two arguments. The first one has details about the event and the second one is the context, that is, the this value for when the eventhandlers are called. If no context is provided this will be bound to the global object (window).

The log function is a helper which collects and displays results.
***/

function Click() {
	this.handlers = [];
}

Click.prototipe = {
	subscribe: function(fn) {
		this.handlers.push(fn);
	},
	
	unsubscribe: function(fn) {
		this.handlers = this.handlers.filter(function(item) {
			if(item !== fn) {
				return item;
			}
		});
	},
	
	fire: function(o, thisObj) {
		var scope = thisObj || window;
		this.handlers.forEach(function(item) {
			item.call(scope, o);
		});
	}
};

var log = (function() {
	var log = "";
	
	return {
		add: function(msg) { 
			log += msg + "\n"; 
		},
		show: function() { 
			console.log(log); 
			// log = ""; 
		}
	}
})();

function run() {
	var clickHandler = function(item) {
		log.add("fired: " + item);
	};
	
	console.log(clickHandler("test"));

	var click = new Click();
	
	click.subscribe(clickHandler);
    	click.fire('event #1');

	click.unsubscribe(clickHandler);
    	click.fire('event #2');
    	click.subscribe(clickHandler);
   	click.fire('event #3');
 
    	log.show();
}

run();
