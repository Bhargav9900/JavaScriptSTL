function add(a,b){
    if(typeof(a) != 'number')
        throw TypeError("A is not a number");
    else
        return a+b;
}

try{
    let res = add(10,20);
    console.log("Res: " + res);

    res = add('hello',34)
    console.log("Res: " + res);
}catch(error){
    console.error(error.message);
}