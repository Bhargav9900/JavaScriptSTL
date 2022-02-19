//creating js class using constuctor function(Traditional way prior to EC2)
function Student(name1,roll){

    //data properties
    this.name = name1;//data member
    this.rollno = roll

    //function properties
    //member method
    this.getInfo = function(){
        return "Roll no: " + this.rollno + "\tName: " + this.name;
    }
}

//creating object of class Student

let stud2 = new Student("bhargav",9);
console.log(stud2.getInfo())

let stud3 = new Student("Bhargav1",965);
console.log(stud3.getInfo())

console.log()
console.log(typeof(stud3))

x=undefined
console.log(typeof(x))