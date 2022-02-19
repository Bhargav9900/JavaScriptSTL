class Student{

    constructor(name,id,dob){
        this.name = name;
        this.id = id;
        this.dob = dob;
    }

    getDetails(){
        console.log("Roll no: " + this.id + "\tName: " + this.name + "\tDOB: " + this.dob);
    }

    //setter method
    set $name(name){
        console.log("Setter method")
        this.name = name;
    }



    //getter method
    get $name(){
        return this.name
    }
}

let s1 = new Student("Demo",'169',"09/09/2000")
s1.getDetails()

s1.$name = "Bhargav"
s1.getDetails()
