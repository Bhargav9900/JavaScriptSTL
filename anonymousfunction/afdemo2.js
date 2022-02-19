var f1 = function(a,b){
    return a+b;
}

function fun2(f3){
    var res = f3(10,20)
    console.log(res)
}
//passing anonymous function
fun2(f1);

function total(){

    var f1 = function(x,y){
        return x*y;
    }


    return f1(5,7);
}

let z = total()
console.log("Multiplication: " + z)