"use strict";

let key = "myEmployee";

function compare(a, b) {
    if (a.department > b.department)
        return 1;
    if (a.department < b.department)
        return -1;
    if (a.fullName > b.fullName)
        return 1;
    if (a.fullName < b.fullName)
        return -1;
    return 0;
}
// 1. GetItem mydata key
function getData(key) {
    let accountBack = localStorage.getItem(key);
    return JSON.parse(accountBack);
}



//2. To add the row for table 
function addTableRow(compartmentId, departmentType, numOfEmployees, averageSalary, salarySum) {
    let row = compartmentId.insertRow();
    let cell = row.insertCell();
    cell.innerHTML = departmentType;
    cell = row.insertCell();
    cell.innerHTML = numOfEmployees;
    cell = row.insertCell();
    cell.innerHTML = averageSalary;
    cell = row.insertCell();
    cell.innerHTML = salarySum;
}



function genTable(allEmployees) {
    let numOfEmployees = 0;
    let salarySum = 0;
    let totalSalary = 0;
    let totalEmployees = 0;
    let departmentType = allEmployees[0].department;
    // get element by body,footer
    let tableBody = document.getElementById("tableBody");
    let tableFoot = document.getElementById("tableFoot");

    for (let index = 0; index < allEmployees.length; index++) {
        if (departmentType == allEmployees[index].department) {
            numOfEmployees++;
            salarySum += parseFloat(allEmployees[index].salary);
        }
        else {
            addTableRow(tableBody, departmentType, numOfEmployees, salarySum / numOfEmployees, salarySum);
            totalSalary += parseFloat(salarySum);
            totalEmployees += numOfEmployees;
            numOfEmployees = 1;
            salarySum = parseFloat(allEmployees[index].salary);
            departmentType = allEmployees[index].department;
        }
        if (index == allEmployees.length - 1) {
            addTableRow(tableBody, departmentType, numOfEmployees, salarySum / numOfEmployees, salarySum);
            totalSalary += parseFloat(salarySum);
            totalEmployees += parseFloat(numOfEmployees);
        }
    }
    // myfooter 
    addTableRow(tableFoot, "Summry", totalEmployees, totalSalary / totalEmployees, totalSalary);
}



window.onload = function () {
    let allEmployees = getData(key);
    allEmployees.sort(compare);
    genTable(allEmployees);
}