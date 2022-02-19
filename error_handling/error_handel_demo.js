try{
    let a=10;
    let res = a+b;
    console.log("Result: " + res)

}catch(error){
    console.error("Error Name: " + error.name);
    console.error("Error message: " + error.message)
}
finally{
    console.log("finally code")
}