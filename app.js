'use strict';
// You will create a constructor to generate an employee object
// which will be rendered in the main section from your app.js file.


//Each employee should has: employeeID, fullName, department, level, imageUrl, salary so 

let allEmployee = [];
function Employee(employeeID, fullName, department, level, imageUrl) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    // This part have level of employee J,Mid,S try switch 
    this.level = level;
    // what is the Img. I want to insert ????
    this.imageUrl = imageUrl;
    // I want it to find the taxSalary
    this.salary = 0;// its need to declare eith 0 as int value not salary???

    allEmployee.push(this);

}
//    console.log(allEmployee);


//calculateSalary 
//create a prototype function for calculating the salary using the provided table like this (I create "calculateSalary)

Employee.prototype.calculateSalary = function () {

    let minSalary, maxSalary;
    // switch for level part
    switch (this.level) {
        case "Junior":
            minSalary = 500;
            maxSalary = 1000;
            break;
        case "Mid-Senior":
            minSalary = 1000;
            maxSalary = 1500;
            break;
        case "Senior":
            minSalary = 1500;
            maxSalary = 2000;
            break;
        default:
            // can I remove this part or must use it instead one of cases ????ask
            // or console.log("Invalid Salary");  ??
            break;

    }

    //using the provided table by generating a random
    // number between the minimum and maximum salary for each level
    //use the below table to calculate the salary depends on the employee level.
    //Level	Min	Max
    //Senior	 1500	2000
    //Mid-Senior 1000	1500
    //Junior	 500	1000

    const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1) + minSalary);// any random between Min and Max
    const taxPercent = 7.5;// amount of tax
    const netSalary = randomSalary - (randomSalary * taxPercent / 100);// after apply tax
    this.salary = netSalary;
}

// console.log(this.salary);



// render 
Employee.prototype.render = function () {
    document.write(`<h1>${this.fullName}'s salary is ${this.salary}</h1>`)
}



//employees instances
allEmployee = [

    new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior'),
    new Employee(1001, 'Lana Ali', 'Finance', 'Senior'),
    new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior'),
    new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior'),
    new Employee(1004, 'Omar Zaid', 'Development', 'Senior'),
    new Employee(1005, 'Rana Saleh', 'Development', 'Junior'),
    new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior'),

];
// Call calculateSalary() for each employee I want loop 
// for (let i = 0; i < Employee.length; i++) {
// employee.calculateSalary();
// employee.render();
//}

for (let i = 0; i < allEmployee.length; i++) {
allEmployee[i].calculateSalary();
allEmployee[i].render();
}




