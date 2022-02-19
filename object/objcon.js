let person = new Object();

person.name = "Bhargav"
person.age = 22
person.show = function(){
    console.log("Name: " + this.name)
    console.log("Age: " + this.age)
}

person.show()

let book = new Object({
    name: "The greate",
    code: 2346,
    author: "Leena",
    price: 456.89,

    print: function(){
        console.log("Name of book: "+this.name)
        console.log("Code: " + this.code)
        console.log("Price: " + this.price)
    }

});

book.print()


let book1 = Object.create(book);
book1.print()
book1.publisher = "Star Pvt. Ltd."
console.log(book1.publisher)