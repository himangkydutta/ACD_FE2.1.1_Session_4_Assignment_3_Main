"use strict";
exports.__esModule = true;
/*
 * Including different file in single file using IMPORT.
 */
var nameSpExprt_1 = require("./nameSpExprt");
var empFirst_1 = require("./empFirst");
var empInfo = { empID: 101, empName: 'Tina', empDept: 'FA001' };
nameSpExprt_1.employeeManage.empRef(empInfo);
empFirst_1.secondFunc();
