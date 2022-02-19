var arr = [10,50,70,40,10]

//using anonymous function as a parameters
arr.forEach(function(ele){
    console.log(ele)
});

console.log("Using arrow function")

arr.forEach( ele=>console.log(ele) );