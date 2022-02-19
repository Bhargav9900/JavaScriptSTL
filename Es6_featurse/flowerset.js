let flo = new Set(['Rose','Rose','Lily','Sunflower']);

//print set
console.log(flo);
console.log("Size: " + flo.size)

//add values to set
flo.add('Lotus').add('Tulip')
console.log("Size: " + flo.size)

//Iterating using for of loop
console.log()
for(let f of flo){
    console.log(f)
}

console.log()
//using foreach
flo.forEach((f)=>console.log(f));

flo.clear();
console.log(flo)

