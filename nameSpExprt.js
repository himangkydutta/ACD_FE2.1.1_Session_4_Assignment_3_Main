"use strict";
exports.__esModule = true;
/*
 * Creating namespace for using Export
 * employeeManage with interface and function
 */
var employeeManage;
(function (employeeManage) {
    function empRef(emp) {
        console.log("Example using Export-Employee ID is " + emp.empID + ",Employee name is " + emp.empName + " and Employee Department is " + emp.empDept);
    }
    employeeManage.empRef = empRef;
})(employeeManage = exports.employeeManage || (exports.employeeManage = {}));
