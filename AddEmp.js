const fs = require("fs");

const Employees = require("./Employee.json");

let emp={"FName":"Pravalika","LName":"G","Age":26,"EmpId":1753};

let emp1={"FName":"Andrew","LName":"Stephen","Age":50,"EmpId":9031}
 
let emp2={"FName":"HarI","LName":"Priya","Age":29,"EmpId":8271}; 

Employees.push(emp);
Employees.push(emp1);
Employees.push(emp2);


fs.writeFile("Employee.json", JSON.stringify(Employees), err => {

    
    if (err) throw err;

    console.log("Done writing"); 
});