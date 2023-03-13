'use strict';
// Get the nav element by its id
// const navbar = document.getElementById('navbar');
// Change the background color

const color1 = "#F5FFC9";
const color2 = "#ab5353";
const color3 = "#F7C04A";
// navbar.style.backgroundColor = color2;
document.body.style.backgroundColor = color1;
// navbar.style.color = color2;


//Each employee should has: employeeID, fullName, department, level, imageUrl, salary so 
//a constructor to generate an employee object is
let allEmployee = [];
// calling the form
let myForm = document.getElementById('myForm');
myForm.style.color = color2;
let container = document.getElementById('cardContainer');
//Constructor
function Employee(employeeID, fullName, department, level, imageUrl) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    // This part have level of employee J,Mid,S try switch 
    this.level = level;
    this.imageUrl = imageUrl;
    // I want it to find the taxSalary
    this.salary = this.netSalary;

    allEmployee.push(this);

}



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
            // allEmployee[i].calculateSalary();
            break;

    }
    const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1) + minSalary);// any random between Min and Max
    const taxPercent = 7.5;// amount of tax
    const netSalary = randomSalary - (randomSalary * taxPercent / 100);
    this.salary = netSalary;
    return this.salary;
}




// render the data on home page
// salary:${netSalary}
Employee.prototype.render = function () {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card">
    <img src="${this.imageUrl}" alt="img">
    <h2> Name :${this.fullName} 
    -ID :${this.employeeID}
    Department :${this.department}
    Level :${this.level} 
    salary:${this.calculateSalary()}
    </div>`;
    container.appendChild(div);

}



//employees instances


let GhaziSamer = new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior', './assets/Ghazi.jpg');
let LanaAli = new Employee(1001, 'Lana Ali', 'Finance', 'Senior', './assets/Lana.jpg');
let TamaraAyoub = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior', './assets/Tamara.jpg');
let SafiWalid = new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior', './assets/Safi.jpg');
let OmarZaid = new Employee(1004, 'Omar Zaid', 'Development', 'Senior', './assets/Omar.jpg');
let RanaSaleh = new Employee(1005, 'Rana Saleh', 'Development', 'Junior', './assets/Rana.jpg');
let HadiAhmad = new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior', './assets/Hadi.jpg');


function callAllEmployee(allEmployee) {
    for (let i = 0; i < allEmployee.length; i++) {
        allEmployee[i].render();
    }
}
callAllEmployee(allEmployee);
function uniqueId(){
//To generate a unique four digits employee id number between 1000 9999
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
}

//______________________part II____________________________
//---------------------------------------------------------
//I need to collect the data ftom the form
//then pass the data to construcrot to create new object
// want render method by .render() to add as anew card


//collect the data from form
function eventHandler(event) {
    event.preventDefault();
    let fullName = (event.target.fullName.value);
    // console.log(event);
    let Department =(event.target.Department.value);
    let level = (event.target.level.value);
    let imageUrl = (event.target.imgurl.value);
    console.log(fullName,Department,level,imageUrl)
if(imageUrl==""){
    imageUrl="http://3.bp.blogspot.com/-XBAE6fsDoVs/UF11yTKrDDI/AAAAAAAAAQc/dM44YoTdwJs/s1600/Google++(1).jpeg";

}

let newObject=new Employee(1001,fullName,Department,level,imageUrl);
// console.log(newObject);
newObject.render();

}

myForm.addEventListener("submit", eventHandler);
// console.log(fullName,Department,level,imageUrl);

// 


