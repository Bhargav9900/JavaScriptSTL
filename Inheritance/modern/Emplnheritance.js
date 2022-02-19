//define ES6 super class
class Employee{
    constructor(empId,name,salary){
    this.empId = empId;
    this.name = name;
    this.salary = salary;
}
    show(){
        console.log("EmpID: " + this.empId)
        console.log("Name: " + this.name)
        console.log("Salary: " + this.salary)
    }
}

class Manager extends Employee{
    constructor(empId,name,salary,incentive){
        super(empId,name,salary);
        this.incentive = incentive;
        
    }

    getInce(){
        return this.incentive
    }

    //method overriding
    show(){
        
        console.log("Manager Show")
        super.show()
    }
}

let e1 = new Employee(160,"Demo",45000.90)
e1.show();

let m1 = new Manager(1611,"Bhargav",46000.90,12000.00);
m1.show();
console.log("Incentives: " + m1.getInce());

class MarketingManager extends Manager{
    show(){
        console.log("MM show")
    }
}

let mm1 = new MarketingManager()
mm1.show();