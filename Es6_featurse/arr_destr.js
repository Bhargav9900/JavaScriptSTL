let arr = [65,12,47];

//destructuring an array
let[a,b,c,d] = arr;
console.log("a: " + a);
console.log("b: " + b);
console.log("c: " + c);
console.log("d: " + d);

function getCities(){
    return ['Pune','Mumbai','Baroda','Surat'];
}

let [c1,c2,c3,c4] = getCities();
console.log("City1: " + c1)
console.log("City2: " + c2)
console.log("City3: " + c3)
console.log("City4: " + c4)

//spread operator
let [ca1,ca2,...cArr] = getCities();
console.log("ca1: " + ca1)
console.log("ca2: " + ca2)
console.log("cArr: " + cArr)

//it give error
//let [ca5,ca6,...cArr1,ca6] = getCities();

