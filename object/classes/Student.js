//creating js class using constuctor function(Traditional way prior to EC2)
function Student(){

    //data properties
    this.name = "Bhargav";//data member
    this.rollno = 16

    //function properties
    //member method
    this.getInfo = function(){
        return "Roll no: " + this.rollno + "\tName: " + this.name;
    }
}

//creating object of class Student
let stud1 = new Student();
console.log(stud1.getInfo())
console.log(typeof(stud1))
