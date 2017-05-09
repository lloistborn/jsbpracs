const fs = require("fs");
const EventEmitter = require("events");

class WithTime extends EventEmitter {
	execute(asyncFunc, ...args) {
		this.emit("begin");
		console.time("execute");
		asyncFunc(...args, (err, data) => {
			if (err) {
				return this.emit("error", err);
			}

			this.emit("data", data);
			console.timeEnd("execute");
			this.emit("end");
		});
	}
}

const withTime = new WithTime();
withTime.on("begin", () => console.log("about to execute"));
withTime.on("end", () => console.log("done with execute"));

withTime.execute(fs.readFile, "./numbers.txt");