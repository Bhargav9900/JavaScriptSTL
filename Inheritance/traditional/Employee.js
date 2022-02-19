//parent class
function Employee(empId,name,salary){

    this.empId = empId;
    this.name = name;
    this.salary = salary
}

Employee.prototype.show = function(){
    console.log("EmpID: " + this.empId)
    console.log("Name: " + this.name)
    console.log("Salary: " + this.salary)
}


let e1 = new Employee(169,"Bhargav",54000.00)
e1.show();

//chlid class
function Manager(empId,name,salary,incentives){
    this.incentives = incentives
    //calling parent class constructor
    Employee.call(this,empId,name,salary)
}

//build 'IS-A' ret;ation btw Emp and Man(inheritance)

Manager.prototype = Object.create(Employee.prototype)
Manager.prototype.constructor = Employee;

//special method of child class

Manager.prototype.getIntencevie = function(){
    return this.incentives;
}

//creating chlid class object
console.log()
let m1 = new Manager(9961,"Bhargav",45000.00,8000.00)
m1.show(); // calling parent method
console.log("Incentive: " +m1.getIntencevie())


