function add(a=10,b=20){
    console.log(a);
    console.log(b);
    return a+b;
}

let res = add();
console.log("Result: " + res)

console.log("Result: " + add(100));
console.log("Result: " + add(100,300));
console.log("Result: " + add(undefined,30));
console.log("Result: " + add(100,undefined));

function mul(a=10,b=10,c=a*b){
    return c;
}

console.log("Multiplication: " + mul());
console.log("Multiplication: " + mul(5));
console.log("Multiplication: " + mul(4,7));
console.log("Multiplication: " + mul(undefined,6));
console.log("Multiplication: " + mul(3,4,6));


