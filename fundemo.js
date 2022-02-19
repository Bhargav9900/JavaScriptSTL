// defining a global function
function claculateInterest(p,n,r){
    var interest = (p*n*r)/100
    return interest;
}

//calling or invoking a global function

var interestAmt = claculateInterest(10000.00,2,5);
console.log('Amount is' , interestAmt)