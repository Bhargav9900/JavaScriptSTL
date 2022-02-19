function fun(a,b,...v){
    console.log(a);
    console.log(b);
    console.log("Length of rest parameter: " + v.length)
    console.log(v);
    v.forEach(e=>console.log(e))
}

fun(10,20);//without rest
fun(10,20,65,4,11,3);
fun(10,20,30,"hello",new Date())