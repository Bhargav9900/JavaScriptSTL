let car={
    code: 'GJ 11 FF 1812',
    model: 'Passion',
    brand: 'honda',
    price: 1200,

    printDetails: function(){
        console.log("Code: " + this.code + "\tModel: " +this.model+ "\tPrice: " +this.price)
    }
}

car.printDetails()