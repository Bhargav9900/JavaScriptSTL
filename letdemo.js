function fun1(){
    if(true){
        var a = 10;
        console.log("Inside the block: " + a);
    }
    console.log("Outside block but inside function: " + a);
}
//console.log("outside function: " + a)
fun1();

function fun2(){
    if(true){
        let a = 10;
        console.log("Inside the block: " + a);
    }
    //console.log("Outside block but inside function: " + a);
}
fun2();