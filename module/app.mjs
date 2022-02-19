import Car,{msg,add} from "./hello.mjs";

console.log("Message: " + msg);

let res = add(16,9);
console.log("Addition is " + res);

let car = new Car();
car.run();