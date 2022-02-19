class Student{

    constructor(name,id,dob){
        this.name = name;
        this.id = id;
        this.dob = dob;
    }

    static getDetails(){
        console.log("Roll no: " + this.id + "\tName: " + this.name + "\tDOB: " + this.dob);
        console.log("static")
    }
    
}

let s1 = new Student("Demo",169,"09/09/2000")
Student.getDetails()