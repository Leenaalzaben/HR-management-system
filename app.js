'use strict';
// Get the nav element by its id
const navbar = document.getElementById('navbar');
// Change the background color

const color1 = "#F5FFC9";
const color2 = "#A86464";
const color3 = "#F7C04A";
navbar.style.backgroundColor = color2;
document.body.style.backgroundColor = color1;
navbar.style.color =color2;



    

// console.log(formE1);
// You will create a constructor to generate an employee object
// which will be rendered in the main section from your app.js file.

//Each employee should has: employeeID, fullName, department, level, imageUrl, salary so 
//a constructor to generate an employee object is
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


    const randomSalary = Math.floor(Math.random() * (maxSalary - minSalary + 1) + minSalary);// any random between Min and Max
    const taxPercent = 7.5;// amount of tax
    const netSalary = randomSalary - (randomSalary * taxPercent / 100);// after apply tax
    this.salary = netSalary;
}




// render 
Employee.prototype.render = function () {
    document.write(`<h1>${this.fullName}'s salary is ${this.salary}</h1>`)
}



//employees instances
allEmployee = [

    new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior','https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Ghazi.jpg'),
    new Employee(1001, 'Lana Ali', 'Finance', 'Senior','https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Lana.jpg'),
    new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior','https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Tamara.jpg'),
    new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior','https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Safi.jpg'),
    new Employee(1004, 'Omar Zaid', 'Development', 'Senior','https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Omar.jpg'),
    new Employee(1005, 'Rana Saleh', 'Development', 'Junior','https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Rana.jpg'),
    new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior','https://github.com/LTUC/amman-prep-d10/blob/main/Class-08/lab/assets/Hadi.jpg'),

];


for (let i = 0; i < allEmployee.length; i++) {
    // allEmployee[i].calculateSalary();
    // allEmployee[i].render();
}


//______________________part II____________________________
//---------------------------------------------------------
//_______________________1.form_____________________________

let formE1 =document.getElementById('my-form');
formE1.style.color=color2;
//_______________________2.fullName_________________________

const fullNameInput = document.getElementById("fullName");
const fullName = fullNameInput.value;


//________________________3.Department______________________

const departmentDropdown = document.getElementById("Department");
const selectedDepartment = departmentDropdown.value;


//________________________4.Level___________________________

const levelDropdown = document.getElementById("level");
const selectedLevel = levelDropdown.value;


// _______________________5.Create Image_____________________

let imgE1 = document.createElement("image");
image.src=this.imageUrl;
//imgE1.src=this.imageUrl;
secImg.appendChild(imgE1);

//_________________________6.Card employee___________________
























// //Footer bar
// const footerSection = document.getElementById('footerSection');
// footerSection.style.backgroundColor = 'black'; // Set the background color
// footerSection.style.padding = '2px'; // Set the padding
// footerSection.style.color = '#333'; // Set the text color

