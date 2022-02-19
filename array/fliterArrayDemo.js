let arr = [50,20,70,40,10,30];
console.log(arr)

let arrGT30 = arr.filter(function(ele){
    return ele > 30;
});

console.log("\nAfter filtering")
console.log(arrGT30)

let arrLT30 = arr.filter(ele => ele<=30)
console.log("\nAfter filtering array less than or equal to 30")
console.log(arrLT30)