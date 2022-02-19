import * as mdl from "./hello.mjs";

console.log("Message: " + mdl.msg);
console.log("Result: " + mdl.add(500,300));

let c = new mdl.Car()
c.run()