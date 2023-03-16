'use strict';
let numberOfEmployeeAdministration = 0;
let numberOfEmployeeFinance = 0;
let numberOfEmployeeMarketing = 0;
let numberOfEmployeeDevelopment = 0;
let sumAdministration = 0;
let sumFinance=0;
let sumMarketing=0;
let sumDevelopment=0;
// 1. GetItem (mydata)
let accountBack = localStorage.getItem('myEmployee');
//const tableData = JSON.parse(localStorage.getItem('myTableData'));
// 2. convert from object to string
let objArray = JSON.parse(accountBack);
console.log(objArray);


  function department(){ 
    
  // department.employees.push(employee);
  // department.totalSalary += employee.salary;
  }

//try to create js table
// let table = document.getElementById("myTable");
const bodyElement=document.getElementById("body");
let  table = document.createElement('table');
// console.log(table);
let headerRow = table.insertRow();
console.log(headerRow);
let departmentHeader = headerRow.insertCell();
//console.log(departmentHeader);
  departmentHeader.textContent = 'Department Name';
  let employeeHeader = headerRow.insertCell();
  // console.log(employeeHeader);
  employeeHeader.textContent = 'Number of employees';
  let totalSalaryHeader = headerRow.insertCell();
  totalSalaryHeader.textContent = 'Total Salary';
  // console.log(totalSalaryHeader);
  let averageHeader = headerRow.insertCell();
  averageHeader.textContent = 'Average';
  // console.log(averageHeader);
  







// Create a new table element
for (let i = 0; i < objArray.length; i++) {
  if (objArray[i].department == "Administration") {
    numberOfEmployeeAdministration++;
    sumAdministration +=objArray[i].salary;
    console.log(sumAdministration);
    
  }
  if (objArray[i].department == "Finance") {
    numberOfEmployeeFinance++;
    sumFinance+=objArray[i].salary;
    console.log(sumFinance);
    
  }
  if (objArray[i].department == "Marketing") {
    numberOfEmployeeMarketing++;
    sumMarketing+=objArray[i].salary;
    console.log(sumMarketing);
    
  }
  if (objArray[i].department == "Development") {
    numberOfEmployeeDevelopment++;
    sumDevelopment+=objArray[i].salary;
    console.log(sumDevelopment);
  }
  
  
  
}
console.log(numberOfEmployeeFinance);
console.log(numberOfEmployeeMarketing);
console.log(numberOfEmployeeAdministration);

function render() {
  let tableRow=document.createElement("tr")
  bodyElement.appendChild(tableRow);
  // console.log(tableRow);
  
  
  let tableDataRow =document.createElement("td");
  console.log(tableDataRow);
  tableDataRow.textContent=objArray[i].department;
  
  
  
  
  
  
  
  //tr
  //appendtable
  //td
  // Retrieve data from local storage
  
  
  

  
  


}



