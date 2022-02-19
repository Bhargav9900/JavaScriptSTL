let cities = "Mumbai Pune Delhi Bengaluru Ahemdabad";

let cityList = cities.split(' ');

for(ele of cityList)
    console.log(ele)

console.log("Using limit")
cityList = cities.split(' ',2);

for(ele of cityList)
        console.log(ele)

let flow = "Rose,Sunflower,Lotus,Lily";
let flowList = flow.split(",")
console.log("Flower");
flowList.forEach(f=>console.log(f))