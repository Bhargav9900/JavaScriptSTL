//define ES6(ECMAScript 2015) classes
class Student{

    constructor(name,id,dob){
        this.name = name;
        if(typeof(id)=="number")
            this.id = id;
        else
            console.log("id error")
        this.dob = dob;
    }

    getDetails(){
        console.log("Roll no: " + this.id + "\tName: " + this.name + "\tDOB: " + this.dob);
    }
    
}

let s1 = new Student("Demo",'169',"09/09/2000")
s1.getDetails()

console.log(s1 instanceof Student)
console.log(s1 instanceof Number)
console.log(s1 instanceof Object)

let dt = new Date();
console.log(dt)
console.log(dt instanceof Date)
console.log(dt instanceof Object)