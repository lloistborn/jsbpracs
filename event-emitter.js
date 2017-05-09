const EventEmitter = require("events");

class WithLog extends EventEmitter {
	execute(taskFunc) {
		console.log("before executing");
		this.emit("begin");
		taskFunc();
		this.emit("end");
		console.log("after executing");
	}
}

const withLog = new WithLog();
withLog.on("begin", () => console.log("about to execute"));
withLog.on("end", () => console.log("done with execute"));

withLog.execute(() => console.log("***** executing task ******"));