let actPhn = new Map()

actPhn.set("Bhargav",8989786756);
actPhn.set("Madhuri",7656564534);

actPhn.set("Alia",9090896534)
        .set("Akshay kumar",8767549098)
          .set("Vidhyut",7869697854)

console.log(actPhn)

console.log("Size: " + actPhn.size)

for(let actor of actPhn.keys()){
    console.log("Actor: " + actor +" Phn: " + actPhn.get(actor));
}

//iterating over values

for(let ph of actPhn.values()){
    console.log(ph);
}

for(let ent of actPhn.entries()){
    console.log("Actor: " + ent[0] +" Phn: " + ent[1]);
}


//using Destruction
for(let[key,value] of actPhn.entries()){
    console.log("Actor: " + key +" Phn: " + value);
}


//using forEach
actPhn.forEach((k,v)=>console.log("Actor: " + k +" Phn: " + v));

//checking whether value is associated with key in map
console.log("Is value present? " + actPhn.has("Alia"));

//delete mapping

actPhn.delete("Vidhyut");
console.log(actPhn);

actPhn.clear();
console.log(actPhn);
console.log("Size: " + actPhn.size)


//creating object

let India = { name: "India",population: '1_345_456_000'};
let IndiaFlag = {name:"Triranga",
                    madeby:"Madam Kama"};

console.log(India)
console.log(IndiaFlag)

let USA = { name: "USA",population: '345_456_000'};
let USAFlag = {name:"American Flag",
                    madeby:"Don't Know"};

let UK = { name: "Uk",population: '945_456_000'};
let UKFlag = {name:"Uk flag",
                    madeby:"Don't know"};


let cfArr = [[India,IndiaFlag],[USA,USAFlag]]

let cfMap = new Map(cfArr);
console.log(cfMap)

cfMap.set(UK,UKFlag);

console.log("Size of cf: " + cfMap.size)

cfMap.forEach((flag,cou)=>{
    console.log("KEY: Country: Name= " + cou.name+
                        "Population= " + cou.population);
    console.log("Value:  Flag Details: Name= " + flag.name+
                            "made by = " + flag.madeby);
});
