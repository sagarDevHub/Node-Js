import EventEmitter from "events";

// Creating Instance
const customEmitter = new EventEmitter();
// 1. on: listen/regiseter for an event
// 2. once: listen/regiseter for an event
// 3. emit: call/emit an event

// customEmitter.on("response", (name, id) => {
//   console.log(`user:${name} id:${id}`);
// });

// customEmitter.emit("response", "Sagar", 20);

//or

customEmitter.once("response", (name, id) => {
  console.log(`user:${name} id:${id}`);
});

customEmitter.emit("response", "Sagar", 20);
customEmitter.emit("response", "Sagar", 30);
customEmitter.emit("response", "Sagar", 40);
