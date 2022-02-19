let book={
    id:1011,
    name:"Java",
    author:"Bhargav",
    price: 350.00
}

//defining global fun
function printInfo(){
    console.log("Book id: " + book.id+ "\tName: " + book.name)
    console.log("Author: " + book.author+ "\tPrice: " + book.price)
}

book.show = printInfo
book.show()