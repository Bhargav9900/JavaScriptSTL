let arr = [50,20,70,40,10,30];

console.log("Sorted in ascending order");
console.log(arr.sort())

//sorting array with compareFunction

arr.sort( (e1,e2) => e1>e2?-1:1 )
console.log("After sorting.. decending")
console.log(arr)