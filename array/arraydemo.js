var arr = [10,50,70,40,10]

for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

arr[3] = "hello"
arr[1] = true;

console.log("After modifying")

for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

