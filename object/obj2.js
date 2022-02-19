let car={
    'regi no': 'GJ 11 FF 1812',
    model: 'Passion',
    brand: 'honda',
    price: 1200
}

console.log(car["regi no"])
console.log()
console.log("for..in loop")

for(let prop in car){
    console.log(car[prop])
}

console.log()

car.brand = "hero";
console.log(car.brand)

console.log()

car.year = 2012;

delete car.price;

console.log()

for(let prop in car){
    console.log(car[prop])
}