//multi export
//defining module hello.js
//exporting individual compo of module sparately
export let msg = "Hello everyone";

export function add(a,b){
    return a+b;
}

export default class Car{
    run(){
        console.log("Car runs");
    }
}